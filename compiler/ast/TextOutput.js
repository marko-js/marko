'use strict';

var Node = require('./Node');
var Literal = require('./Literal');

function trim(textOutputNode) {
    var text = textOutputNode.argument.value;
    var isFirst = textOutputNode.isFirst;
    var isLast = textOutputNode.isLast;

    if (isFirst) {
        //First child
        text = text.replace(/^\n\s*/g, '');
    }
    if (isLast) {
        //Last child
        text = text.replace(/\n\s*$/g, '');
    }
    if (/^\n\s*$/.test(text)) {
        //Whitespace between elements
        text = '';
    }
    text = text.replace(/\s+/g, ' ');
    textOutputNode.argument.value = text;
}

class TextOutput extends Node {
    constructor(def) {
        super('TextOutput');
        this.argument = def.argument;
        this.escape = def.escape;
        this.normalized = false;
        this.isFirst = false;
        this.isLast = false;
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(generator) {
        this.normalizeText();

        var argument = this.argument;

        if (argument instanceof Literal) {
            if (!argument.value) {
                return;
            }
        } else {
            let builder = generator.builder;

            // TODO Only escape if necessary
            argument = builder.functionCall(
                'escapeXml',
                [argument]);
        }

        generator.addWrite(argument);
    }

    normalizeText(generator) {
        if (this.normalized) {
            return;
        }

        var container = this.container;
        if (!container) {
            return;
        }

        var isFirst = true;

        var currentTextLiteral = null;
        var literalTextNodes = [];

        container.forEach((curChild) => {
            if (curChild.noOutput) {
                // Skip over AST nodes that produce no HTML output
                return;
            }

            if (curChild.type === 'TextOutput') {
                curChild.normalized = true;
            }

            if (curChild.type === 'TextOutput' && curChild.isLiteral()) {
                if (currentTextLiteral) {
                    currentTextLiteral.argument.value += curChild.argument.value;
                    curChild.detach();
                } else {
                    currentTextLiteral = curChild;
                    literalTextNodes.push(currentTextLiteral);
                    if (isFirst) {
                        currentTextLiteral.isFirst = true;
                    }
                }
            } else {
                currentTextLiteral = null;
            }

            isFirst = false;
        });

        if (currentTextLiteral) {
            // Last child text
            currentTextLiteral.isLast = true;
        }

        literalTextNodes.forEach(trim);


    }

    isWhitespace() {
        var argument = this.argument;
        return (argument instanceof Literal) &&
            (typeof argument.value === 'string') &&
            (argument.value.trim() === '');
    }

    appendText(text) {
        if (!this.isLiteral()) {
            throw new Error('Text cannot be appended to a non-literal TextOutput node');
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

module.exports = TextOutput;