'use strict';

var Node = require('./Node');

class HtmlOutput extends Node {
    constructor(def) {
        super('HtmlOutput');
        this.argument = def.argument;
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(generator) {
        let argument = this.argument;

        generator.addWrite(argument);
    }
}

module.exports = HtmlOutput;