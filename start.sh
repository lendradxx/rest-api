#!/usr/bin/env bash

echo "Building typescriptt and mkdocs file!"
yarn build
mkdocs build
echo "Starting server..."
yarn start
