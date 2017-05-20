'use strict';

var fs = require('fs');
var path = require('path');

function getComponentFiles(filename) {
    var ext = path.extname(filename);
    if (ext === '.js') {
        return null;
    }

    var nameNoExt = path.basename(filename, ext);

    var isEntry = 'index' === nameNoExt;

    var fileMatch = '('+nameNoExt.replace(/\./g, '\\.') + '\\.' + (isEntry ? '|' : '') + ')';
    var styleMatch = new RegExp('^'+fileMatch+'style\\.\\w+$');
    var componentMatch = new RegExp('^'+fileMatch+'component\\.\\w+$');
    var splitComponentMatch = new RegExp('^'+fileMatch+'component-browser\\.\\w+$');

    var dirname = path.dirname(filename);

    var foundFiles = {
        styles: [],
        file: null,
        browserFile: null
    };

    var dirFiles = fs.readdirSync(dirname);
    dirFiles.sort();

    for (let i=dirFiles.length - 1; i>=0; i--) {
        let file = dirFiles[i];

        if (styleMatch.test(file)) {
            foundFiles.styles.push(file);
        } else if (splitComponentMatch.test(file)) {
            foundFiles.browserFile = file;
        } else if (componentMatch.test(file)) {
            foundFiles.file = file;
        }
    }

    return foundFiles;
}

module.exports = getComponentFiles;
