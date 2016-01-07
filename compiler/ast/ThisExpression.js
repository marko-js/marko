'use strict';

var Node = require('./Node');

class ThisExpression extends Node {
    constructor(def) {
        super('ThisExpression');
    }

    generateCode(codegen) {
        codegen.write('this');
    }
}

module.exports = ThisExpression;