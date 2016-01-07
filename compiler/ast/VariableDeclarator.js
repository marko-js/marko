'use strict';

var Node = require('./Node');
var Identifier = require('./Identifier');

class VariableDeclarator extends Node {
    constructor(def) {
        super('VariableDeclarator');
        this.id = def.id;
        this.init = def.init;
    }

    generateCode(codegen) {
        var id = this.id;
        var init = this.init;

        if (!(id instanceof Identifier) && typeof id !== 'string') {
            throw new Error('Invalid variable name: ' + id);
        }

        codegen.generateCode(id);

        if (init != null) {
            codegen.write(' = ');
            codegen.generateCode(init);
        }
    }

    walk(walker) {
        this.id = walker.walk(this.id);
        this.init = walker.walk(this.init);
    }
}

module.exports = VariableDeclarator;