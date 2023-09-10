#!/bin/bash

# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

# Set the image name and tag.
IMAGE_NAME="zeppelin-site-dev"
IMAGE_TAG="latest"

# Set the location of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Function to build the Docker image.
build_docker_image() {
  echo "Building Docker image..."
  docker build -t $IMAGE_NAME:$IMAGE_TAG .
}

# Function to run the Jekyll server.
run_jekyll_serve() {
  echo "Running Jekyll server..."
  docker run --rm -p 4000:4000 -v "$DIR:/app" $IMAGE_NAME:$IMAGE_TAG \
    bundle exec jekyll serve --incremental --watch --host 0.0.0.0
}

# Function to build Jekyll distribution.
run_jekyll_build() {
  echo "Building Jekyll distribution in production mode..."
  docker run --rm -e JEKYLL_ENV=production -v "$DIR:/app" $IMAGE_NAME:$IMAGE_TAG \
    bundle exec jekyll build
}

# Delete if $DIR/_site directory extist.
if [ -d "$DIR/_site" ]; then
  echo "Deleting $DIR/_site directory"
  rm -rf $DIR/_site
fi

# Check for allowed options.
if [[ "$1" == "--build-image" ]]; then
  build_docker_image
  run_jekyll_serve
elif [[ "$1" == "--build-dist" ]]; then
  run_jekyll_build
else
  run_jekyll_serve
fi
