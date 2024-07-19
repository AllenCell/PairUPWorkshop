import os
import numpy as np
import argparse
from aicsimageio import AICSImage
from skimage.measure import regionprops
import pandas as pd
from skimage.measure import label
from skimage.measure import regionprops
from skimage.segmentation import find_boundaries

"""
Computes features on manifests generated from raw and segmentation pairs
"""

# /allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_aligned_images
parser= argparse.ArgumentParser()
parser.add_argument("--input_seg_dir", type= str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_seg")
parser.add_argument("--input_raw_timelapse_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_aligned_images")
parser.add_argument("--feature_manifest_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/feature_manifests")


def calculate_mean_intensity_on_raw(region, raw_img):
    "mean intensity of raw img on region mask"
    mask = region.image
    raw_region = raw_img[region.slice]
    mean_intensity = np.mean(raw_region[mask].compute())
    return mean_intensity

def calculate_median_intensity_on_raw(region, raw_img):
    "median intensity of raw img on region mask"
    mask = region.image
    raw_region = raw_img[region.slice]
    median_intensity = np.median(raw_region[mask].compute())
    return median_intensity

def calculate_aspect_ratio(region):
    "Compute aspect ratio of region"
    try:
        aspect_ratio = region.major_axis_length/region.minor_axis_length
        return aspect_ratio
    except:
        # Case where there is a single pixel segmentation
        return 0


def calculate_features_from_raw_seg_pair(raw_img, seg_img, tp, raw_filepath, seg_filepath):
    "Takes raw, seg pair and computes features. fms_raw_filepath and timepoint are just appended as columns to the manifest"

    properties_list = []
    # Calculate features for each label
    for region in regionprops(seg_img):
        centroids = region.centroid
        
        props = {
            'Y_centroid': centroids[0],
            'X_centroid': centroids[1],
            'Label': region.label,
            'area': region.area,
            "major_axis_length": region.major_axis_length,
            "minor_axis_length": region.minor_axis_length,
            'mean_intensity': calculate_mean_intensity_on_raw(region, raw_img),
            "median_intensity": calculate_median_intensity_on_raw(region, raw_img),
            "aspect_ratio": calculate_aspect_ratio(region)
        }
        properties_list.append(props)
    
    dataframe = pd.DataFrame(properties_list)
    dataframe['Timepoint'] = tp
    dataframe['RAW_filepath'] = raw_filepath
    dataframe['Segmentation_filepath'] = seg_filepath
    return dataframe

if __name__ == "__main__":
    args = parser.parse_args()
    filenames_raw_timelapse = [f for f in os.listdir(args.input_seg_dir) if "_maxproject" in f]
    seg_filenames = [f for f in os.listdir(args.input_seg_dir) if "seg" in f]

    for f in range(len(seg_filenames)):
        seg_img_fp = os.path.join(args.input_seg_dir, seg_filenames[f])
        seg_img = AICSImage(seg_img_fp)
        raw_img_fn = seg_filenames[f].split("seg_", 1)[1]
        raw_timelapse_filename = [f for f in os.listdir(args.input_raw_timelapse_dir) if raw_img_fn in f]
        assert len(raw_timelapse_filename) == 1
        raw_img_fp = os.path.join(args.input_raw_timelapse_dir, raw_timelapse_filename[0])
        raw_timelapse = AICSImage(raw_img_fp)
        timepoints = raw_timelapse.dims["T"][0]
        seg_img = seg_img.data[0,0,0,:,:]
        dataframes = []
        for tp in range(timepoints):
            print("timepoint is", tp)
            raw_tp = raw_timelapse.get_image_dask_data("YX", T=tp)
            manifest = calculate_features_from_raw_seg_pair(raw_tp, seg_img, tp, raw_timelapse_filename[0], seg_img_fp)
            dataframes.append(manifest)
            # save manifest
        FULL_DATAFRAME = pd.concat(dataframes)
        print(np.shape(FULL_DATAFRAME))
        feature_manifest_name = f"feature_manifest_{raw_img_fn.split('.tiff', 1)[0]}.csv".replace(' ', '_')

        FULL_DATAFRAME.to_csv(os.path.join(args.feature_manifest_dir, feature_manifest_name))





    

    
