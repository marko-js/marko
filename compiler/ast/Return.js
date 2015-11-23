'use strict';

var Node = require('./Node');

class Return extends Node {
    constructor(def) {
        super('Return');
        this.argument = def.argument;
    }

    generateCode(generator) {
        if (!generator.inFunction) {
            throw new Error('"return" not allowed outside a function body');
        }

        var argument = this.argument;

        generator.write('return ');

        if (argument) {
            generator.generateCode(argument);
        }
    }
}

module.exports = Return;