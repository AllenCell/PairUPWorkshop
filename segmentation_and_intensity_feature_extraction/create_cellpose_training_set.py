import cv2
import numpy as np
from PIL import Image
import os
import argparse
from aicsimageio.writers import OmeTiffWriter
from aicsimageio import AICSImage

def get_max_proj(img):
    '''returns max project of image'''
    max_proj = np.max(img, axis=0)[np.newaxis, ...][0,:,:]
    return max_proj

"""
For this project, we take a maxproject of the timelapse and save it as a tiff file.... We then segment this only once and use it as a training set for cellpose 
"""

parser= argparse.ArgumentParser()
parser.add_argument("--input_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results")
parser.add_argument("--output_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/cellpose_training_set")

if __name__ == "__main__":
    args= parser.parse_args()
    filenames = [f for f in os.listdir(args.input_dir) if "affine" in f]

    for f in range(len(filenames)):
        img = AICSImage(os.path.join(args.input_dir, filenames[f]))
        timelapse = img.data[:,0,0,:,:]
        max_proj_thru_time = get_max_proj(timelapse)
        # Save max projection
        OmeTiffWriter.save(max_proj_thru_time, os.path.join(args.output_dir, f"affine_aligned_maxproject_{os.path.basename(filenames[f])}.tiff"), dim_order="YX", channel_names=["GFP"])


