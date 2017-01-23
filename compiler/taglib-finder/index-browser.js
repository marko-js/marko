function find(dirname, registeredTaglibs) {
    return registeredTaglibs || [];
}

function excludeDir(dirname) {
    // no-op
}

function clearCache() {
    // no-op
}


exports.find = find;
exports.excludeDir = excludeDir;
exports.clearCache = clearCache;