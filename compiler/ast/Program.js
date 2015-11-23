'use strict';
var Node = require('./Node');

class Program extends Node {
    constructor(def) {
        super('Program');
        this.body = def.body;
    }

    generateCode(generator) {
        var body = this.body;
        generator.generateStatements(body);
        if (generator._bufferedWrites) {
            generator._write('\n');
            generator.flushBufferedWrites();
        }
    }
}

module.exports = Program;