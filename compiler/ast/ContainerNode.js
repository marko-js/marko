'use strict';

var Node = require('./Node');

class ContainerNode extends Node {
    constructor(def) {
        super('ContainerNode');
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        return codegen.genereateCode(this.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = ContainerNode;