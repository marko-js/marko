'use strict';

var Node = require('./Node');

class Identifier extends Node {
    constructor(def) {
        super('Identifier');
        this.name = def.name;
    }

    generateCode(codegen) {
        var name = this.name;
        codegen.write(name);
    }

    toString() {
        return this.name;
    }
}

module.exports = Identifier;