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

    generateHtmlCode(generator) {
        let argument = this.argument;
        generator.addWrite(argument);
    }
}

module.exports = Html;