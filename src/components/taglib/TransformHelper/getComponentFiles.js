'use strict';

const fs = require('fs');
const path = require('path');

function getComponentFiles(filename) {
    let ext = path.extname(filename);
    if (ext === '.js') {
        return null;
    }

    let nameNoExt = path.basename(filename, ext);

    let isEntry = 'index' === nameNoExt;

    let fileMatch = '('+nameNoExt.replace(/\./g, '\\.') + '\\.' + (isEntry ? '|' : '') + ')';
    let styleMatch = new RegExp('^'+fileMatch+'style\\.\\w+$');
    let componentMatch = new RegExp('^'+fileMatch+'component\\.\\w+$');
    let splitComponentMatch = new RegExp('^'+fileMatch+'component-browser\\.\\w+$');
    let packageMatch = new RegExp('^'+fileMatch+'browser\\.\\json$');

    let dirname = path.dirname(filename);

    let foundFiles = {
        styles: [],
        file: null,
        browserFile: null,
        package: null
    };

    let dirFiles = fs.readdirSync(dirname);
    dirFiles.sort();

    for (let i=dirFiles.length - 1; i>=0; i--) {
        let file = dirFiles[i];

        if (styleMatch.test(file)) {
            foundFiles.styles.push(file);
        } else if (splitComponentMatch.test(file)) {
            foundFiles.browserFile = file;
        } else if (componentMatch.test(file)) {
            foundFiles.file = file;
        } else if (packageMatch.test(file)) {
            foundFiles.package = file;
        }
    }

    return foundFiles;
}

module.exports = getComponentFiles;
