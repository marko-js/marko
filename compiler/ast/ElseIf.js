'use strict';

var Node = require('./Node');

class ElseIf extends Node {
    constructor(def) {
        super('ElseIf');
        this.test = def.test;
        this.body = this.makeContainer(def.body);
        this.else = def.else;
        this.matched = false;
    }

    generateCode(generator) {
        if (!this.matched) {
            generator.addError('Unmatched else statement');
            return;
        }

        var ifStatement = generator.builder.ifStatement(this.test, this.body, this.else);
        generator.write('else ');
        generator.generateCode(ifStatement);
    }
}

module.exports = ElseIf;