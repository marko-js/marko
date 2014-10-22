function find(dirname, registeredTaglibs) {
    return registeredTaglibs || [];
}

function excludeDir(dirname) {
    // no-op
}

exports.find = find;
exports.excludeDir = excludeDir;