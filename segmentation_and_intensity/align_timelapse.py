import cv2
import numpy as np
import os
import argparse
from aicsimageio.writers import OmeTiffWriter
from skimage.feature import match_template
from skimage.feature import peak_local_max
from scipy.ndimage import affine_transform
from aicsimageio import AICSImage

parser= argparse.ArgumentParser()
parser.add_argument("--input_dir", type= str, default="/allen/aics/assay-dev/users/Sandi/pair-up/chris", help="Input directory where timelapse images are stored")
parser.add_argument("--output_dir", type=str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/pairup_chris_results_aligned_images", help="Output directory of where to save aligned max projects")


"""
Script to align maxprojects of the timelapse to the first timepoint using cross correlation. 
"""


def get_max_proj(img):
    '''returns max project of image'''
    max_proj = np.max(img, axis=0)[np.newaxis, ...][0,:,:]
    return max_proj

def align_images_sift(source_gray, target_gray):
    """
    Aligns the source image to the target image using an affine registration via matching of sift features.
    
    Parameters:
    - source_gray: Grayscale source image to be aligned.
    - target_gray: Grayscale target image.
    
    Returns:
    - aligned_image: The source image aligned to the target image.
    """


    sift = cv2.SIFT_create()
    # Find keypoints and descriptors in the source and target images
    keypoints_source, descriptors_source = sift.detectAndCompute(source_gray, None)
    keypoints_target, descriptors_target = sift.detectAndCompute(target_gray, None)
    # Initialize a brute-force matcher
    matcher = cv2.BFMatcher()
    # Match keypoints in the source and target images
    matches = matcher.match(descriptors_source, descriptors_target)
    # Sort matches by distance
    matches = sorted(matches, key=lambda x: x.distance)
    # Select top matches
    num_matches = 100
    matches = matches[:num_matches]
    # Extract matched keypoints
    source_points = np.float32([keypoints_source[match.queryIdx].pt for match in matches]).reshape(-1, 1, 2)
    target_points = np.float32([keypoints_target[match.trainIdx].pt for match in matches]).reshape(-1, 1, 2)
    # Estimate affine transformation matrix
    affine_matrix, _ = cv2.estimateAffinePartial2D(source_points, target_points)
    # Apply affine transformation to the source image
    aligned_image = cv2.warpAffine(source_image, affine_matrix, (target_image.shape[1], target_image.shape[0]))

    return aligned_image

def align_rigid_images_sift(source_gray, target_gray):
    """
    Aligns the source image to the target image using rigid registration via matching of sift features.
    
    Parameters:
    - source_gray: Grayscale source image to be aligned.
    - target_gray: Grayscale target image.
    
    Returns:
    - aligned_image: The source image aligned to the target image.
    """
    # Initialize SIFT detector
    sift = cv2.SIFT_create()
    # Find keypoints and descriptors in the source and target images
    keypoints_source, descriptors_source = sift.detectAndCompute(source_gray, None)
    keypoints_target, descriptors_target = sift.detectAndCompute(target_gray, None)
    # Initialize a brute-force matcher
    matcher = cv2.BFMatcher()
    # Match keypoints in the source and target images
    matches = matcher.match(descriptors_source, descriptors_target)
    # Sort matches by distance
    matches = sorted(matches, key=lambda x: x.distance)
    # Select top matches
    num_matches = 100
    matches = matches[:num_matches]
    # Extract matched keypoints
    source_points = np.float32([keypoints_source[match.queryIdx].pt for match in matches]).reshape(-1, 1, 2)
    target_points = np.float32([keypoints_target[match.trainIdx].pt for match in matches]).reshape(-1, 1, 2)
    # Estimate rigid transformation matrix
    matrix, _ = cv2.estimateAffinePartial2D(source_points, target_points, method=cv2.RANSAC, ransacReprojThreshold=3, maxIters=2000, confidence=0.99, refineIters=20)
    # Apply transformation
    aligned_image = cv2.warpAffine(source_gray, matrix, (target_gray.shape[1], target_gray.shape[0]))

    return aligned_image


def align_images_cross_correlation(image, reference):
    """
    Aligns the source image to the target image using cross correlation. Does a rigid registration.
    
    Parameters:
    - source_gray: Grayscale source image to be aligned.
    - target_gray: Grayscale target image.
    
    Returns:
    - aligned_image: The source image aligned to the target image.

    """    
    correlation = match_template(reference, image, pad_input=True)
    
    # Find the peak position
    peak = peak_local_max(correlation, num_peaks=1)[0]
    
    # Calculate translation from the peak
    translation = np.array(reference.shape) // 2 - peak[:2]
    
    # Create an affine transformation matrix for translation
    transformation_matrix = np.array([[1, 0, translation[1]],
                                      [0, 1, translation[0]],
                                      [0, 0, 1]])
    
    # Apply the transformation
    aligned_image = affine_transform(image, transformation_matrix[:2, :2], offset=translation)
    
    return aligned_image


if __name__ == '__main__':
    args= parser.parse_args()
    filenames = [f for f in os.listdir(args.input_dir) if f.endswith(".czi")]
    print(filenames)

    for f in range(len(filenames)):
        print(f"Aligning filenames {f}")
        img = AICSImage(os.path.join(args.input_dir, filenames[f]))
        timepoints = img.dims["T"][0]
        target_image = get_max_proj(AICSImage(os.path.join(args.input_dir, filenames[f])).data[0,0,:,:,:])
        aligned_images = [target_image]
        for tp in range(1, timepoints):
            # Align subsequent timepoints to the first timepoint
            source_image = get_max_proj(AICSImage(os.path.join(args.input_dir, filenames[f])).data[tp, 0, :, :, :])            
            aligned_image = align_images_cross_correlation(source_image, target_image)
            aligned_images.append(aligned_image)
        # Save aligned images as a single image
        aligned_images = np.array(aligned_images)

        output_name = filenames[f].split(".czi", 1)[0] + "_aligned_maxproject.tiff"
        OmeTiffWriter.save(aligned_images, os.path.join(args.output_dir, output_name), dim_order="TYX", channel_names=["GFP"])

