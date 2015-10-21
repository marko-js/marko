#!/bin/bash

DIR=`dirname $0`

cd ${DIR}

if [ ! -d "../node_modules/marko-widgets" ]; then
    mkdir -p ../node_modules/marko-widgets
    cat marko-widgets-fake.js > ../node_modules/marko-widgets/index.js
fi
