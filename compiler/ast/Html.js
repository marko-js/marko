'use strict';

var Node = require('./Node');

class Html extends Node {
    constructor(def) {
        super('Html');
        this.argument = def.argument;
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(codegen) {
        let argument = this.argument;
        codegen.addWrite(argument);
    }
}

module.exports = Html;