#%%
import numpy as np
from pathlib import Path
from bioio.bio_image import imread
from ec2_metadata import ec2_metadata
from bioio.writers import OmeTiffWriter
from skimage.filters import threshold_otsu, apply_hysteresis_threshold
from skimage.measure import label
from skimage.morphology import remove_small_objects

#%%
DATA_DIR= Path(r'\\allen\aics\assay-dev\users\Sandi\pair-up\camille\comb_img/')
WORKING_DIR = Path.cwd() / 'results'
try:
    iid = ec2_metadata.instance_id
    print(f"This is an EC2 instance with id {iid}")
    DATA_DIR= Path('S:\camille\comb_img')
    WORKING_DIR = Path('C:\workshop\data\camille')
except: pass
WORKING_DIR.mkdir(exist_ok=True)

#%%
def normalize(img, high=99.9, low = 0.1):
    # clip extreme values
    img = np.clip(img, np.percentile(img, low), np.percentile(img, high))
    # normalize
    img = (img-img.mean())/img.std()
    return img

#%%
def load(path, channel=None):
    # Z and C are switched in the metadata
    img = imread(path).squeeze().transpose(1, 0, 2, 3)
    if isinstance(channel, int):
        return img[channel]
    return img

#%%
def segment_cell_body(img, min_object_size=500):
    img = normalize(img)
    # automatically find high threshold
    thresh_high = threshold_otsu(img)
    # use lower threshold for hysteresis
    thresh_low = thresh_high * 0.4
    # apply hysteresis - helps connect fine axons/dendrites to soma
    binary = apply_hysteresis_threshold(img, thresh_low, thresh_high)
    # label connected components
    label_img = label(binary)
    # remove small objects
    label_img = remove_small_objects(label_img, min_size=min_object_size)
    return label_img

def segment_dapi(img):
    img = normalize(img)
    # simple thresholding and labeling
    thresh = threshold_otsu(img)
    return label(img > thresh)

def generate_segmentations():
    for fn in DATA_DIR.glob('*tif*'):
        img = load(fn)
        ch0_seg = segment_dapi(img[0])
        cell_body_seg = segment_cell_body(img[1])
        dapi_seg = segment_dapi(img[2])
        # remove segmentations outside cell body
        ch0_seg[cell_body_seg==0] = 0

        merged = np.stack([ch0_seg, cell_body_seg, dapi_seg], axis=0).astype(np.uint16)
        OmeTiffWriter().save(uri=WORKING_DIR/fn.name, data=merged)

        print(f'Saved {fn.name}')

#%%
generate_segmentations()
