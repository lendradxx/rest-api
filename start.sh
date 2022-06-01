#!/usr/bin/env bash

if [ ! -d "dist" && ! -d "site" ]; then
    echo "Building typescriptt and mkdocs file!"
    yarn build
    mkdocs build
fi

echo "Starting server..."
yarn start