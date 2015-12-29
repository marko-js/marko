'use strict';

var Node = require('./Node');

class Return extends Node {
    constructor(def) {
        super('Return');
        this.argument = def.argument;
    }

    generateCode(codegen) {
        if (!codegen.inFunction) {
            throw new Error('"return" not allowed outside a function body');
        }

        var argument = this.argument;

        codegen.write('return ');

        if (argument) {
            codegen.generateCode(argument);
        }
    }
}

module.exports = Return;