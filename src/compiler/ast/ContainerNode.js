'use strict';

var Node = require('./Node');

class ContainerNode extends Node {
    constructor(type) {
        super(type);
        this.body = this.makeContainer([]);
    }

    generateCode(codegen) {
        return codegen.generateCode(this.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = ContainerNode;