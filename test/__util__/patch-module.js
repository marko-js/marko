var fs = require('fs');
var nodePath = require('path');

var Module = require('module').Module;
var oldResolveFilename = Module._resolveFilename;

var isDebug = require('../../env').isDebug;

var rootDir = nodePath.join(__dirname, '../../');
var markoDir = isDebug ? nodePath.join(rootDir, 'src') : nodePath.join(rootDir, 'dist');

var markoInstalledDir = nodePath.join(rootDir, 'node_modules/marko');
if (fs.existsSync(markoInstalledDir)) {
    fs.renameSync(markoInstalledDir, nodePath.join(rootDir, 'node_modules/~marko'));
}

Module._resolveFilename = function (request, parent, isMain) {

    if (request.charAt(0) !== '.') {
        if (request === 'marko/components' || request === 'marko/jquery' || request === 'marko/legacy-components' || request === 'marko/ready') {
            request = nodePath.join(rootDir, request.substring('marko/'.length));
        } else if (request.startsWith('marko/dist/') || request.startsWith('marko/src/') || request.startsWith('marko/helpers/')) {

            request = nodePath.join(rootDir, request.substring('marko/'.length));
        } else if (request === 'marko') {
            request = rootDir;
        } else if (request.startsWith('marko/')) {
            request = nodePath.join(markoDir, request.substring('marko/'.length));
        }
    }

    return oldResolveFilename.call(this, request, parent, isMain);
};