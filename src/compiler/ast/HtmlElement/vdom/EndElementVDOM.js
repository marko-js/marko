'use strict';
const Node = require('../../Node');

class EndElementVDOM extends Node {
    constructor() {
        super('EndElementVDOM');
    }

    writeCode(writer) {
        writer.write('out.ee()');
    }
}

module.exports = EndElementVDOM;