'use strict';

var Node = require('./Node');
var ok = require('assert').ok;

class ElseIf extends Node {
    constructor(def) {
        super('ElseIf');
        this.if = def.if;
        this.matched = false;
    }

    generateCode(generator) {
        if (!this.matched) {
            generator.addError('Unmatched else statement');
            return;
        }

        var ifStatement = this.if;
        ok(ifStatement);

        generator.write('else ');
        generator.generateCode(this.if);
    }
}

module.exports = ElseIf;