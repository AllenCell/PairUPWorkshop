import shutil
import os
from tqdm import tqdm
from cellpose import models
import numpy as np
import tifffile
import argparse
from PIL import Image
import random
import skimage
from cellpose import io, models, train
from cellpose import denoise

random.seed(2)

"""
Generic cellpose traineer that has different options to train cellpose models
"""

parser = argparse.ArgumentParser()
parser.add_argument("--input_dir", type= str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/cellpose_training_set")
parser.add_argument("--cellpose_model_save_dir", type= str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/cellpose_training_set")



def intensity_normalization_max(img):
    '''Min/Max scaling'''
    rescaled_img = ((img - img.min()) * (1/(img.max() - img.min()) * 2**16))
    return rescaled_img.astype(np.uint16)

def randomly_sample_patches(train_input, train_mask, samples=1,patch_dim=250):
    x_max_to_sample = np.shape(train_input)[1] - patch_dim
    y_max_to_sample = np.shape(train_input)[0] - patch_dim
    patches_raw = []
    patches_masks=[]
    for i in range(samples):
        x_ind = random.randint(0, x_max_to_sample)
        y_ind = random.randint(0, y_max_to_sample)
        train_raw_patch = train_input[y_ind:y_ind+patch_dim, x_ind:x_ind+patch_dim]
        train_mask_patch = train_mask[y_ind:y_ind+patch_dim, x_ind:x_ind+patch_dim]
        assert np.shape(train_raw_patch) == (patch_dim, patch_dim)
        patches_raw.append(train_raw_patch)
        patches_masks.append(train_mask_patch)
    return patches_raw, patches_masks


if __name__ == "__main__":
    args = parser.parse_args()
    segmentation_masks = [f for f in os.listdir(args.input_dir) if f.endswith("_cp_masks.png")]
    input_masks = []
    input_train_images = []
    for i in range(len(segmentation_masks)):
        train_mask = np.array(Image.open(os.path.join(args.input_dir, segmentation_masks[i])))
        #train_img = np.array(Image.open(os.path.join(args.input_dir, segmentation_masks[i])))
        train_img_name = segmentation_masks[i].replace("_cp_masks.png", ".tiff")
        train_img = tifffile.imread(os.path.join(args.input_dir, train_img_name))
        input_masks.append(train_mask)
        input_train_images.append(train_img)

    # print(f"training set is size {len(input_train_images)}")
    model = models.CellposeModel(gpu=True, pretrained_model="/home/goutham.nadarajan/.cellpose/models/cyto3")
    train.train_seg(model.net, input_train_images, input_masks, channels=[0,0], save_path=args.cellpose_model_save_dir)


