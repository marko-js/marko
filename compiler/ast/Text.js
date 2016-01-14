'use strict';

var Node = require('./Node');
var Literal = require('./Literal');

function trim(textNode) {
    var text = textNode.argument.value;
    var isFirst = textNode.isFirst;
    var isLast = textNode.isLast;

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
    textNode.argument.value = text;
}

class Text extends Node {
    constructor(def) {
        super('Text');
        this.argument = def.argument;
        this.escape = def.escape;
        this.normalized = false;
        this.isFirst = false;
        this.isLast = false;
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(codegen) {
        this.normalizeText();

        var argument = this.argument;
        var escape = this.escape !== false;

        if (argument instanceof Literal) {
            if (!argument.value) {
                return;
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

    normalizeText(codegen) {
        if (this.normalized) {
            return;
        }

        var parentNode = this.parentNode;
        if (parentNode && parentNode.tagDef && parentNode.tagDef.preserveWhitespace) {
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

            if (curChild.type === 'Text') {
                curChild.normalized = true;
            }

            if (curChild.type === 'Text' && curChild.isLiteral()) {
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