'use strict';

var Node = require('./Node');

class Identifier extends Node {
    constructor(def) {
        super('Identifier');
        this.name = def.name;
    }

    generateCode(generator) {
        var name = this.name;
        generator.write(name);
    }
}

module.exports = Identifier;