'use strict';
var Node = require('./Node');

class Program extends Node {
    constructor(def) {
        super('Program');
        this.body = def.body;
    }

    generateCode(codegen) {
        var body = this.body;
        codegen.generateStatements(body);
        if (codegen._bufferedWrites) {
            codegen._write('\n');
            codegen._flushBufferedWrites();
        }
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Program;