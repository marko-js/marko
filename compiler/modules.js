var nativeRequire = require;
var resolveFrom = require('resolve-from');
var deresolve = require('./util/deresolve');

const deresolveOptions = {
    shouldRemoveExt(ext) {
        return ext === '.js' || ext === '.json' || ext === '.es6';
    }
};

// This allows us to swap out a different implementation in the browser...
// We only need this to make Try Online work :/
exports.require = function(path) {
    return nativeRequire(path);
};

exports.resolve = function(path) {
    return nativeRequire.resolve(path);
};

exports.resolveFrom = function(from, target) {
    return resolveFrom(from, target);
};

exports.deresolve = function(targetFilename, from) {
    return deresolve(targetFilename, from, deresolveOptions);
};