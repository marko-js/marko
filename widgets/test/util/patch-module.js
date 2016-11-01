var nodePath = require('path');

var Module = require('module').Module;
var oldResolveFilename = Module._resolveFilename;

var rootDir = nodePath.join(__dirname, '../../');

Module._resolveFilename = function(request, parent, isMain) {
    if (request.startsWith('marko-widgets')) {
        request = request.substring('marko-widgets'.length);
        request = nodePath.join(rootDir, request);
    }
    return oldResolveFilename.call(this, request, parent, isMain);
};