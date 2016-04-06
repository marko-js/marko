'use strict';

var ok = require('assert').ok;
var Node = require('./Node');
var Literal = require('./Literal');
var escapeXml = require('raptor-util/escapeXml');

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

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(codegen) {
        var parentNode = this.parentNode;
        if (parentNode) {
            parentNode._normalizeChildTextNodes(codegen);
        }

        var argument = this.argument;
        var escape = this.escape !== false;

        if (argument instanceof Literal) {
            if (!argument.value) {
                return;
            }

            if (escape === true) {
                argument.value = escapeXml(argument.value.toString());
            }
        } else {
            let builder = codegen.builder;

            if (escape) {
                // TODO Only escape the parts that need to be escaped if it is a compound expression with static
                //      text parts
                argument = builder.functionCall(
                    'escapeXml',
                    [argument]);
            } else {
                argument = builder.functionCall(builder.identifier('str'), [ argument ]);
            }
        }

        codegen.addWrite(argument);
    }

    isWhitespace() {
        var argument = this.argument;
        return (argument instanceof Literal) &&
            (typeof argument.value === 'string') &&
            (argument.value.trim() === '');
    }

    appendText(text) {
        if (!this.isLiteral()) {
            throw new Error('Text cannot be appended to a non-literal Text node');
        }

        this.argument.value += text;
    }

    toJSON() {
        return {
            type: this.type,
            argument: this.argument
        };
    }
}

module.exports = Text;