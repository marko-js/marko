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

        if (argument) {
            codegen.write('return ');
            codegen.generateCode(argument);
        } else {
            codegen.write('return');
        }
    }
}

module.exports = Return;