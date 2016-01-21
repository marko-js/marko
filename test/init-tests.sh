#!/bin/bash

DIR=`dirname $0`

mkdir -p $DIR/node_modules
rm -rf $DIR/node_modules/marko-widgets
ln -s ../.. $DIR/node_modules/marko-widgets

echo "Created symbolic link to marko-widgets in the test/node_modules directory"