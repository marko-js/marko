'use strict';

var Node = require('./Node');

class ThisExpression extends Node {
    constructor(def) {
        super('ThisExpression');
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        writer.write('this');
    }

    toString() {
        return 'this';
    }
}

module.exports = ThisExpression;