'use strict';

var Node = require('./Node');

class Else extends Node {
    constructor(def) {
        super('Else');
        this.body = this.makeContainer(def.body);
        this.matched = false;
    }

    generateCode(codegen) {
        if (!this.matched) {
            codegen.addError('Unmatched else statement');
            return;
        }
        var body = this.body;

        codegen.write('else ');
        codegen.generateBlock(body);
        codegen.write('\n');
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Else;