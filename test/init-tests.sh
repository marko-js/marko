DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd ${DIR}

if [ ! -L "./node_modules/marko-widgets" ]; then
    mkdir -p node_modules
    ln -s ../../ node_modules/marko-widgets
fi
