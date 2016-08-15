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
        var context = codegen.context;
        var argument = this.argument;
        var escape = this.escape !== false;

        if (argument instanceof Literal) {
            if (!argument.value) {
                return null;
            }

            if (context.isFlagSet('SCRIPT_BODY')) {
                escape = false;
            }

            if (escape === true) {
                argument.value = escapeXml(argument.value.toString());
            }
        } else {
            let builder = codegen.builder;

            if (escape) {
                let escapeIdentifier = context.helper('escapeXml');

                if (context.isFlagSet('SCRIPT_BODY')) {
                    escapeIdentifier = context.helper('escapeScript');
                }

                // TODO Only escape the parts that need to be escaped if it is a compound expression with static
                //      text parts
                argument = builder.functionCall(
                    escapeIdentifier,
                    [argument]);
            } else {
                argument = builder.functionCall(context.helper('str'), [ argument ]);
            }
        }

        return codegen.builder.html(argument);
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