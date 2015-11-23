'use strict';

var Node = require('./Node');

class Literal extends Node {
    constructor(def) {
        super('Literal');
        this.value = def.value;
    }

    generateCode(generator) {
        var value = this.value;
        generator.writeLiteral(value);
    }
}

module.exports = Literal;