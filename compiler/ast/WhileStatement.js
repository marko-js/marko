'use strict';

var Node = require('./Node');

class WhileStatement extends Node {
    constructor(def) {
        super('WhileStatement');
        this.test = def.test;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var test = this.test;
        var body = this.body;

        codegen.write('while (');
        codegen.generateCode(test);
        codegen.write(') ');

        codegen.generateBlock(body);

        codegen.write('\n');
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
    }
}

module.exports = WhileStatement;