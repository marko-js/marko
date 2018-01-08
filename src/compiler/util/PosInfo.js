'use strict';

var path = require('path');

function getRelativePath(absolutePath) {
    if (typeof window === 'undefined') {
        absolutePath = path.resolve(process.cwd(), absolutePath);
        return path.relative(process.cwd(), absolutePath);
    } else {
        return absolutePath;
    }
}

class PosInfo {
    constructor(path, line, column) {
        this.path = getRelativePath(path);
        this.line = line;
        this.column = column;
    }

    toString() {
        return this.path + (this.line != null ? (":" + this.line + ":" + this.column) : '');
    }
}

module.exports = PosInfo;