
from pathlib import Path
import numpy as np
# from bioio.bio_image import imread
from bioio import BioImage
# from ec2_metadata import ec2_metadata
from bioio_base.types import PhysicalPixelSizes
from bioio.writers import OmeTiffWriter
from skimage import morphology
from skimage import filters
# from matplotlib import pyplot as plt


IS_TEST = False


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

    return nodes_lab, edges_lab, skels_lab



## Define some global variables
DIM_ORDER = 'TCZYX'
DIM_MAP = get_dim_map(DIM_ORDER)

## Get the path to the folder containing this script and the
## segmented image filepaths
SCT_FPATH = Path(__file__)
CSD = SCT_FPATH.parent
IMG_PATHS = list(Path.glob(CSD / 'results', '*.tif*'))

## Create some folders to output your nodes, edges, and skeletonizations
OUT_DIRS = [CSD / f'{SCT_FPATH.stem}_out',
            # CSD / 'results_nodes',
            # CSD / 'results_skels'
            ]

for d in OUT_DIRS:
    Path.mkdir(d, exist_ok=True)


## 
for filepath in IMG_PATHS:
    filepath = IMG_PATHS[0] if IS_TEST else filepath

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
    nodes_edges_skels = [np.expand_dims(img_arr, axis=[DIM_MAP[d] for d in "TC"]) for img_arr in nodes_edges_skels]

    ## stack the nodes, edges, and skeletons into a single image
    nodes_edges_skels = np.concatenate(nodes_edges_skels, axis=DIM_MAP["C"])

    ## set the dtype to be the minimum necessary
    nodes_edges_skels = nodes_edges_skels.astype(get_smallest_int_dtype(nodes_edges_skels))

    # save the nodes, edges, and skeletonizations
    ch_clrs = [(0, 255, 255), (255, 0, 255), (255, 255 ,0)]
    ch_nms = ['nodes', 'edges', 'skels']
    nodes_fname = CSD / f'{SCT_FPATH.stem}_out' / (filepath.stem + '_nodes_and_edges.ome.tiff')
    OmeTiffWriter.save(nodes_edges_skels,
                       nodes_fname,
                       dim_order=DIM_ORDER,
                       channel_colors=ch_clrs,
                       channel_names=ch_nms,
                       physical_pixel_sizes=img_phys_dims)

    if IS_TEST:
        break
    else:
        pass

    # plt.imshow(img_dapi.max(axis=DIM_MAP["Z"]).squeeze()[300:500, 400:600], interpolation='nearest')
    # plt.imshow(img_lamin.max(axis=DIM_MAP["Z"]).squeeze()[300:500, 400:600], interpolation='nearest')
    # plt.imshow(img_phall.max(axis=DIM_MAP["Z"]).squeeze()[300:500, 300:500], interpolation='nearest')
    # plt.imshow(skels_phall.max(axis=0).squeeze()[300:500, 300:500], interpolation='nearest')
    # plt.imshow(skels_phall.max(axis=0).squeeze()[300:500, 300:500], interpolation='nearest')

