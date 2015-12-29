'use strict';

var Node = require('./Node');

class Literal extends Node {
    constructor(def) {
        super('Literal');
        this.value = def.value;
    }

    generateCode(codegen) {
        var value = this.value;
        codegen.writeLiteral(value);
    }
}

module.exports = Literal;