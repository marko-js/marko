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

    generateCode(codegen) {
        if (!this.matched) {
            codegen.addError('Unmatched else statement');
            return;
        }

        var ifStatement = codegen.builder.ifStatement(this.test, this.body, this.else);
        codegen.write('else ');
        codegen.generateCode(ifStatement);
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
        this.else = walker.walk(this.else);
    }
}

module.exports = ElseIf;