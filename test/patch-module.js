var nodePath = require('path');

var Module = require('module').Module;
var oldResolveFilename = Module._resolveFilename;

var markoRegExp = /^marko($|[\/])/;

var rootDir = nodePath.join(__dirname, '../');
Module._resolveFilename = function(request, parent, isMain) {
    if (markoRegExp.test(request)) {
        request = request.substring('marko'.length);
        request = rootDir + request;
    }
    return oldResolveFilename.call(this, request, parent, isMain);
};