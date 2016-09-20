'use strict';

var ok = require('assert').ok;
var Node = require('../Node');
var Literal = require('../Literal');

var generateHTMLCode = require('./html/generateCode');
var generateVDOMCode = require('./vdom/generateCode');
var vdomUtil = require('../../util/vdom');

class Text extends Node {
    constructor(def) {
        super('Text');
        this.argument = def.argument;
        this.escape = def.escape !== false;
        this.normalized = false;
        this.isFirst = false;
        this.isLast = false;
        this.preserveWhitespace = def.preserveWhitespace === true;

        ok(this.argument, 'Invalid argument');
    }

    generateHTMLCode(codegen) {
        return generateHTMLCode(this, codegen);
    }

    generateVDOMCode(codegen) {
        return generateVDOMCode(this, codegen, vdomUtil);
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    isWhitespace() {
        var argument = this.argument;
        return (argument instanceof Literal) &&
            (typeof argument.value === 'string') &&
            (argument.value.trim() === '');
    }

    toJSON() {
        return {
            type: this.type,
            argument: this.argument
        };
    }
}

module.exports = Text;