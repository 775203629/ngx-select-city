#!/bin/bash
# build and publish this package to npm

PACKAGE_DIR="$(dirname $0)"
cd "${PACKAGE_DIR}"
echo "Installing dependencies..."
npm install
export PATH="node_modules/.bin/:${PATH}"

echo "Building..."
ngc
tsc

echo "Done. Publishing to npmjs. Make sure you should use 'npm adduser' first."
export NPM_CONFIG_REGISTRY="https://registry.npmjs.org/"
npm publish
