import shutil
import os
from tqdm import tqdm
from cellpose import core, utils, io, models, metrics
import numpy as np
import skimage
import argparse
from cellpose import denoise, io
from aicsimageio import AICSImage
from aicsimageio.writers import OmeTiffWriter


"""
Runs inference on the raw images and saves the output
"""

def get_max_proj(img):
    '''returns max project of image'''
    max_proj = np.max(img, axis=0)[np.newaxis, ...][0,:,:]
    return max_proj



parser= argparse.ArgumentParser()
parser.add_argument("--input_dir", type= str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_aligned_images")
parser.add_argument("--output_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_seg")
parser.add_argument("--model_path", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/cellpose_training_set/models/cellpose_1721189076.990467")

# 
if __name__ == "__main__":

    args= parser.parse_args()
    filenames = [f for f in os.listdir(args.input_dir) if f.endswith(".tiff")]
    print(filenames)
    model = models.CellposeModel(gpu=True, pretrained_model=args.model_path)
    for tp in range(len(filenames)):
        img = AICSImage(os.path.join(args.input_dir, filenames[tp]))
        raw_img = img.data[:, 0, 0, :, :]
        mip_raw = get_max_proj(raw_img)
        masks, flows, styles = model.eval(mip_raw, channels=[0,0])
        output_name = f"seg_{os.path.basename(filenames[tp])}"
        output_raw_name = f"raw_{os.path.basename(filenames[tp])}"
        OmeTiffWriter.save(mip_raw, os.path.join(args.output_dir, output_raw_name), dim_order="YX", channel_names=["raw"])
        OmeTiffWriter.save(masks, os.path.join(args.output_dir, output_name), dim_order="YX", channel_names=["seg"])