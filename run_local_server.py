#!/usr/bin/env python3
# File taken from https://github.com/allen-cell-animated/colorizer-data/blob/doc/getting-started-guide/documentation/getting_started_guide/scripts/run_local_server.py
# Adapted from https://stackoverflow.com/a/21957017.

from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        SimpleHTTPRequestHandler.end_headers(self)


if __name__ == "__main__":
    test(
        CORSRequestHandler,
        HTTPServer,
        port=int(sys.argv[1]) if len(sys.argv) > 1 else 8080,
    )

