import numpy as np
import os
import argparse
from bioio import BioImage
from bioio.writers import OmeZarrWriter



"""
This script converts the tiff files to OME-Zarr format in order to be loaded by the web volume viewer.
"""

parser= argparse.ArgumentParser()
parser.add_argument("--input_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_aligned_images_v2")
parser.add_argument("--output_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/volume_viewer_converted_2")

if __name__ == "__main__":
    args= parser.parse_args()
    filenames = [f for f in os.listdir(args.input_dir)]

    for f in range(len(filenames)):
        img = BioImage(os.path.join(args.input_dir, filenames[f]))
        timelapse = img.data[:,0,0,:,:] # Originally TCZYX
        output_name = filenames[f].replace(".tiff", ".zarr").replace(" ", "_").replace("#", "_")
        writer = OmeZarrWriter(os.path.join(args.output_dir, output_name))
        writer.write_image(timelapse, "Image:0", scale_num_levels=5, dimension_order="TYX", physical_pixel_sizes=None, channel_names=["GFP"], channel_colors=None) # 

        
