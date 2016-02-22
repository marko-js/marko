'use strict';

var Node = require('./Node');
var ok = require('assert').ok;

class Expression extends Node {
    constructor(def) {
        super('Expression');
        this.value = def.value;
        ok(this.value != null, 'Invalid expression');
    }

    generateCode(codegen) {
        codegen.generateCode(this.value);
    }

    isCompoundExpression() {
        return true;
    }

    toString() {
        return this.value;
    }
}

module.exports = Expression;