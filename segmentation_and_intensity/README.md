# Segmentation and intensity feature calculation workflow



## Image Registration

In this first step, we load the timelapse movies as maximum intensity projections and then spatially align each movie to the first timepoint

```
python align_timelapse.py --input_dir input_directory_of_raw_data --output_dir output_directory_for_aligned_data
```

## Segmentation of timelapse

We can now segment the timelapse using Cellpose. Here, after our timelapse is aligned, we create a maximum intensity projection through time and segment that using a custom cellpose model

```
python align_timelapse.py --input_dir input_directory --output_dir output_directory --model_path model_path_of_trained_model
```

## Feature Calculation workflow

Now that we have pairs of raw and segmented images, we now calculate instance level features. This script calculates some basic nuclei features and saves the result as a csv for each movie

```
python feature_extraction.py --input_seg_dir segmentation_dir --input_raw_timelpase_dir aligned_data_dir --feature_manifest_dir feature_output_manifest_dir
```

## Data visualizatioin using colorizer- TBD

To visualize the results of this data:

```
python colorizer_conversion.py --parent_input_csvs_dir output_dir_of_feature_manifest_dir --output_dir colorizer_output_directory

python make_collection.py --colorizer_input_dir colorizer_input_directory_for_converted_data
```
This produces a collection file that you can then upload and view on colorizer



## Training a custom cellpose model(Optional)

Cellpose has many standard models that you can apply. This is often a great place to start to get a first pass segmentation. 

However, if these are not generalizable, you can also train a custom model. We recomend using the cellpose GUI for creating annotations for a subset of data and exporting the annotations as png masks.

Here we provide a python script to do this in a programatic way:

```
python train_cellpose.py --input_dir training_set_dir --cellpose_model_save_dir trained_model_savedir --pretrained_model_dir generic_cellpose_model_weights_dir
```





