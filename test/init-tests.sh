#!/bin/bash

DIR=`dirname $0`

cd ${DIR}

if [ ! -L "./node_modules/marko-v2" ]; then
    mkdir -p node_modules
    ln -s ../../ node_modules/marko-v2
fi
