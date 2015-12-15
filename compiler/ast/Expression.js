'use strict';

var Node = require('./Node');

class Expression extends Node {
    constructor(def) {
        super('Html');
        this.value = def.value;
    }

    generateCode(generator) {
        generator.generateCode(this.value);
    }
}

module.exports = Expression;