#!/bin/bash

DIR=`dirname $0`

cd ${DIR}

if [ ! -L "./node_modules/marko" ]; then
    mkdir -p node_modules
    ln -s ../../ node_modules/marko
fi
