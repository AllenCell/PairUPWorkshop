import os
import pandas as pd
import argparse
import json


parser= argparse.ArgumentParser()
parser.add_argument("--colorizer_input_dir", type= str, default="/allen/aics/assay-dev/users/Goutham/pairup_chris_results/colorizer_outputs")


if __name__ == "__main__":
    args = parser.parse_args()

    ALL_collections = []
    path_to_condition_outputs= args.colorizer_input_dir
    print(os.listdir(path_to_condition_outputs))
    filenames = [os.path.join(path_to_condition_outputs,f) for f in os.listdir(path_to_condition_outputs) if os.path.isdir(os.path.join(path_to_condition_outputs,f))]
    print(filenames)

    for path in filenames:
        movie_entry = {"name": os.path.basename(path).split(".csv",1)[0], "path": os.path.join(os.path.basename(path), "manifest.json")}
        ALL_collections.append(movie_entry)
        print(os.path.join(path_to_condition_outputs, path, "manifest.json"))
        assert os.path.exists(os.path.join(path_to_condition_outputs, path, "manifest.json"))

    # ALL_collections.append(["", ])
    out_file = open(os.path.join(path_to_condition_outputs,"collections_all.json"), "w")
    print(ALL_collections)
    json.dump(ALL_collections, out_file) 

