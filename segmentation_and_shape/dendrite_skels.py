
IS_TEST = False

# %%
from pathlib import Path
import numpy as np
# from bioio.bio_image import imread
from bioio import BioImage
# from ec2_metadata import ec2_metadata
from bioio_base.types import PhysicalPixelSizes
from bioio.writers import OmeTiffWriter
from skimage import morphology
from skimage import filters
from skimage import measure
from skimage.segmentation import find_boundaries
import pandas as pd
## there is a bug in this pandas version where a RuntimeWarning is
## printed when saving a DataFrame to a csv if it contains np.nan
## so import warnings and ignore that warning
import warnings
## if we want to do some testing then we will also want to show
## images interactively using matplotlib probably
if IS_TEST:
    from matplotlib import pyplot as plt
else:
    pass


# %%
def get_dim_map(dim_order: str):
    dims = [a for a in dim_order]

    dim_nums = tuple(range(len(dims)))

    dim_map = dict(zip(dims, dim_nums))

    return dim_map# -> tuple(int)


def get_smallest_int_dtype(arr):
    dtype_dict = {np.iinfo(np.uint8).max: np.uint8,
                  np.iinfo(np.uint16).max: np.uint16,
                  np.iinfo(np.uint32).max: np.uint32}
    dtype = dtype_dict[min((dtype_max for dtype_max in dtype_dict.keys() if arr.max() < dtype_max))]

    return dtype


def arr2graph(arr):
    """Will take an array and return the nodes and edges \
    as well as their connections. """

    ## Make sure that the array is either 2D or 3D
    try:
        assert(arr.ndim == 2 or arr.ndim == 3)
    except AssertionError:
        print('Input array must be 2D or 3D.')

    ## Fill any tiny holes
    arr_filled = morphology.binary_closing(arr, footprint=morphology.cube(3))
    skel = morphology.skeletonize(arr_filled).astype(bool)
    ## skeletonize above will make your array int8 dtype, and
    ## will make True == 255, but I want it to be 1, so I will
    ## force it to be bool, hence the .astype above.

    ## Converting the bool to int now does not make 
    ## True -> 255, instead True -> 1 (which is what I want):
    ## Transform the skeletonized array into one where each
    ## pixel has a value equal to the number of non-zero 
    ## immediate neighbors plus itself
    ## the * skel is to re-skeletonize the rank sum
    if arr.ndim == 2:
        conn = filters.rank.sum(skel.astype(np.uint8), 
                                footprint=morphology.square(3),
                                mask=skel) * skel
    elif arr.ndim == 3:
        conn = filters.rank.pop(skel.astype(np.uint8),
                                footprint=morphology.cube(3),
                                mask=skel) * skel
    # This produces an array with the following values
    # (which is why I insisted on having the skeletonized array
    # have only 0s and 1s as values):
    # conn == 1,2 -> node (isolated point)
    # conn == 2 -> node (end point)
    # conn == 3 -> edge
    # conn >= 4 -> node (branch point)

    ## Label those endpoints, edges, and branchpoints (this is
    ## to get the connections between edges and nodes later on):
    edges_arr = (conn == 3)
    nodes_arr = ((conn == 1) + (conn == 2) + (conn >= 4))

    ## There can be both isolated nodes (a single pixel in space)
    ## and isolated edges (a closed loop in space)
    ## how do you uniquely define such a graph?
    ## Both edges and nodes need their own labels.
    nodes_lab = morphology.label(nodes_arr, connectivity=3)
    edges_lab = morphology.label(edges_arr, connectivity=3)
    skels_lab = morphology.label(skel, connectivity=3)

    return nodes_lab, edges_lab, skels_lab, conn


# %%
## Define some global variables
DIM_ORDER = 'TCZYX'
DIM_MAP = get_dim_map(DIM_ORDER)

## Get the path to the folder containing this script and the
## segmented image filepaths
SCT_FPATH = Path(__file__)
CSD = SCT_FPATH.parent
IMG_PATHS = list(Path.glob(CSD / 'results', '*.tif*'))

## Create some folders to output your nodes, edges, and skeletonizations
SKELS_OUT_DIR = CSD / f'{SCT_FPATH.stem}_out' / 'nodes_edges_skeletons'
DENDRITES_OUT_DIR = CSD / f'{SCT_FPATH.stem}_out' / 'dendrites_labeled'
SURF_CENT_OUT_DIR = CSD / f'{SCT_FPATH.stem}_out' / 'phalloidin_surfaces_centroids'
TABLES_OUT_DIR = CSD / f'{SCT_FPATH.stem}_out' / 'tables'
OUT_DIRS = [SKELS_OUT_DIR,
            DENDRITES_OUT_DIR,
            SURF_CENT_OUT_DIR,
            TABLES_OUT_DIR
            ]

for d in OUT_DIRS:
    Path.mkdir(d, exist_ok=True)

# %%
## run the analysis on each file in IMG_PATHS
for filepath in IMG_PATHS:
    filepath = IMG_PATHS[0] if IS_TEST else filepath

    print(f'Working on file {filepath.name}...')

    ## choose the channel that you want
    lamin_chan = 0
    phall_chan = 1
    dapi_chan = 2
    ## open the image
    img = BioImage(filepath, dim_order=DIM_ORDER)
    img_lamin = img.get_image_data(DIM_ORDER, C=lamin_chan)
    img_phall = img.get_image_data(DIM_ORDER, C=phall_chan)
    img_dapi = img.get_image_data(DIM_ORDER, C=dapi_chan)

    img_phys_dims = img.physical_pixel_sizes if any(img.physical_pixel_sizes) else PhysicalPixelSizes(Z=1, Y=1, X=1)

    ## get the nodes, edges, and skeletons of the segmentations
    nodes_edges_skels = arr2graph(img_phall.squeeze().astype(bool))

    ## return the images to the full dimension order 'TCZYX'
    nodes_edges_skels, conn = [np.expand_dims(img_arr, axis=[DIM_MAP[d] for d in "TC"]) for img_arr in nodes_edges_skels[:3]], nodes_edges_skels[-1]

    ## stack the nodes, edges, and skeletons into a single image
    nodes_edges_skels = np.concatenate(nodes_edges_skels, axis=DIM_MAP["C"])

    ## set the dtype to be the minimum necessary
    nodes_edges_skels = nodes_edges_skels.astype(get_smallest_int_dtype(nodes_edges_skels))

    ## save the nodes, edges, and skeletonizations
    ch_clrs = [(0, 255, 255), (255, 0, 255), (255, 255 ,0)]
    ch_nms = ['nodes', 'edges', 'skels']
    nodes_fname = SKELS_OUT_DIR / (filepath.stem + '_nodes_and_edges.ome.tiff')
    OmeTiffWriter.save(nodes_edges_skels,
                       nodes_fname,
                       dim_order=DIM_ORDER,
                       channel_colors=ch_clrs,
                       channel_names=ch_nms,
                       physical_pixel_sizes=img_phys_dims)


    ## split the channels back out so we can work with the skeleton further
    nodes_edges_skels = np.split(nodes_edges_skels, nodes_edges_skels.shape[DIM_MAP["C"]], axis=DIM_MAP["C"])

    ## get the number of endpoints for each cells dendrite
    endpoints = img_phall * (conn == 2) * ~img_dapi.astype(bool)
    ## re-label the endpoints
    endpoints_lab = morphology.label(endpoints.squeeze(), connectivity=endpoints.squeeze().ndim).astype(endpoints.dtype)
    ## get how many endpoints are present in each cells skeleton
    unq_endpoints = {prop.label: np.unique((endpoints.squeeze()[prop.slice] == prop.label) * endpoints_lab.squeeze()[prop.slice]) for prop in measure.regionprops(endpoints.squeeze())}
    unq_endpoints = {label: [num for num in unq_endpoints[label] if num != 0] for label in unq_endpoints}
    num_endpoints = {label: len(unq_endpoints[label]) for label in unq_endpoints}

    ## get the number of dendrites for each cell
    ## break the skeleton apart at the nucleus by multiplying the skeletons by the inverse of
    ## the dapi segmentations
    dendrites = img_phall * nodes_edges_skels[1].astype(bool) * ~img_dapi.astype(bool)
    ## re-label these dendrites
    dendrites_lab = morphology.label(dendrites.squeeze(), connectivity=dendrites.squeeze().ndim).astype(dendrites.dtype)
    unq_dendrites = {prop.label: np.unique((dendrites.squeeze()[prop.slice] == prop.label) * dendrites_lab.squeeze()[prop.slice]) for prop in measure.regionprops(dendrites.squeeze())}
    unq_dendrites = {label: [num for num in unq_dendrites[label] if num != 0] for label in unq_dendrites}
    num_dendrites = {label: len(unq_dendrites[label]) for label in unq_dendrites}

    ## combine the labeled endpoints, the labeled dendrites, into a single image for easy comparison
    ends_dendrs_dapi = [endpoints_lab, dendrites_lab, img_dapi.squeeze()]
    ## return the images to the full dimension order 'TCZYX'
    ends_dendrs_dapi = [np.expand_dims(img_arr, axis=[DIM_MAP[d] for d in "TC"]) for img_arr in ends_dendrs_dapi]

    ## stack the channels into a single image
    ends_dendrs_dapi = np.concatenate(ends_dendrs_dapi, axis=DIM_MAP["C"])

    ## save this image
    ch_clrs = [(0, 255, 255), (255, 0, 255), (255, 255 ,0)]
    ch_nms = ['ends', 'dendrites', 'dapi']
    dendrs_fname = DENDRITES_OUT_DIR / (filepath.stem + '_dendrites.ome.tiff')
    OmeTiffWriter.save(ends_dendrs_dapi,
                       dendrs_fname,
                       dim_order=DIM_ORDER,
                       channel_colors=ch_clrs,
                       channel_names=ch_nms,
                       physical_pixel_sizes=img_phys_dims)

    ## get the borders of the phalloidin channel segmentations so that we can calculate
    ## the surface area to volume ratio later
    img_phall_surf = find_boundaries(img_phall, connectivity=1, mode='inner') * img_phall

    ## get some basic properties about the phalloidin channel and the nuclei channel
    ## that we will re-use later
    phall_props = {prop.label: prop for prop in measure.regionprops(img_phall.squeeze())}
    phall_surf_props = {prop.label: prop for prop in measure.regionprops(img_phall_surf.squeeze())}
    dapi_props = {prop.label: prop for prop in measure.regionprops(img_dapi.squeeze())}

    ## get how many nuclei are present in each cell
    unq_nuclei = {prop.label: np.unique((img_phall.squeeze()[prop.slice] == prop.label) * img_dapi.squeeze()[prop.slice]) for prop in phall_props.values()}
    unq_nuclei = {label: [num for num in unq_nuclei[label] if num != 0] for label in unq_nuclei}
    num_nuclei = {label: len(unq_nuclei[label]) for label in unq_nuclei}

    ## also make an image with just the labeled centroids
    img_phall_centroid = np.zeros(img_phall.shape, dtype=img_phall.dtype)
    phall_centroids = {phall_props[prop_label].centroid: prop_label for prop_label in phall_props}
    for coords in phall_centroids:
        img_phall_centroid[:,:,*tuple(int(x) for x in coords)] = phall_centroids[coords]
    img_phall_centroid = morphology.dilation(img_phall_centroid)

    ## save the phalloidin boundary and phalloidin segmentation together
    img_phall_seg_surf_centr = [img_phall, img_phall_surf, img_phall_centroid]

    ## stack the channels into a single image
    img_phall_seg_surf_centr = np.concatenate(img_phall_seg_surf_centr, axis=DIM_MAP["C"])

    ## save this image
    ch_clrs = [(0, 255, 255), (255, 0, 255), (255, 255 ,0)]
    ch_nms = ['segmentations', 'surfaces', 'centroids']
    phall_seg_centr_fname = SURF_CENT_OUT_DIR / (filepath.stem + '_surfaces_centroids.ome.tiff')
    OmeTiffWriter.save(img_phall_seg_surf_centr,
                       phall_seg_centr_fname,
                       dim_order=DIM_ORDER,
                       channel_colors=ch_clrs,
                       channel_names=ch_nms,
                       physical_pixel_sizes=img_phys_dims)


    ## create a table of interesting values
    column_headers = ['phalloidin segmentation label',
                      'centroid Z',
                      'centroid Y',
                      'centroid X',
                      'cell surface area (px)',
                      'cell volume (vx)',
                      'cell surface area to volume ratio',
                      'number of dapi segmentations',
                      'number of dendrites',
                      'number of endpoints',
                      ]
    shape_feature_metrics = [[prop_label] + [phall_props[prop_label].centroid[0],
                                             phall_props[prop_label].centroid[1],
                                             phall_props[prop_label].centroid[2],
                                             phall_surf_props[prop_label].num_pixels,
                                             phall_props[prop_label].num_pixels,
                                             phall_surf_props[prop_label].num_pixels / phall_props[prop_label].num_pixels,
                                             num_nuclei[prop_label] if prop_label in num_nuclei else np.nan,
                                             num_dendrites[prop_label] if prop_label in num_dendrites else np.nan,
                                             num_endpoints[prop_label] if prop_label in num_endpoints else np.nan,
                                            ]
                             for prop_label in phall_props]
    shape_feature_metrics = pd.DataFrame(data=shape_feature_metrics, columns=column_headers)

    table_fname = TABLES_OUT_DIR / (filepath.stem + '_shape_feature_metrics.tsv')
    ## catch the RuntimeWarning
    with warnings.catch_warnings(category=RuntimeWarning, action='ignore'):
        shape_feature_metrics.to_csv(table_fname, sep='\t')

    if IS_TEST:
        break
    else:
        pass

# %%
