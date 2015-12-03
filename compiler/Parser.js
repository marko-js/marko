'use strict';
var ok = require('assert').ok;

var COMPILER_ATTRIBUTE_HANDLERS = {
    whitespace: function(attr, compilerOptions) {
        if (attr.value === 'preserve') {
            compilerOptions.preserveWhitespace = true;
        }
    },
    comments: function(attr, compilerOptions) {
        if (attr.value === 'preserve') {
            compilerOptions.preserveComments = true;
        }
    }
};

var ieConditionalCommentRegExp = /^\[if [^]*?<!\[endif\]$/;

function isIEConditionalComment(comment) {
    return ieConditionalCommentRegExp.test(comment);
}

function parseExpression(expression) {
    // TODO Build an AST from the String expression
    return expression;
}


class Parser {
    constructor(parserImpl) {
        ok(parserImpl, '"parserImpl" is required');

        this.parserImpl = parserImpl;

        this.prevTextNode = null;
        this.compilerOptions = null;
        this.stack = null;

        // The context gets provided when parse is called
        // but we store it as part of the object so that the handler
        // methods have access
        this.context = null;
    }

    _reset() {
        this.prevTextNode = null;
        this.compilerOptions = {};
        this.stack = [];
    }

    parse(src, context) {
        ok(typeof src === 'string', '"src" should be a string');
        ok(context, '"context" is required');

        this._reset();

        this.context = context;

        var builder = context.builder;
        var rootNode = builder.templateRoot();

        this.stack.push({
            node: rootNode
        });

        this.parserImpl.parse(src, this);

        return rootNode;
    }

    handleCharacters(text) {
        var builder = this.context.builder;

        if (this.prevTextNode && this.prevTextNode.isLiteral()) {
            this.prevTextNode.appendText(text);
        } else {
            this.prevTextNode = builder.textOutput(builder.literal(text));
            this.prevTextNode.pos = text.pos;
            this.parentNode.appendChild(this.prevTextNode);
        }
    }

    handleStartElement(el) {
        var context = this.context;
        var builder = context.builder;

        var tagName = el.tagName;
        var attributes = el.attributes;
        var argument = el.argument; // e.g. For <for(color in colors)>, args will be "color in colors"

        if (tagName === 'compiler-options') {
            var compilerOptions = this.compilerOptions;

            attributes.forEach(function (attr) {
                let attrName = attr.name;
                let attrValue = attr.value;
                let handler = COMPILER_ATTRIBUTE_HANDLERS[attrValue];

                if (!handler) {
                    throw new Error('Invalid Marko compiler option: ' + attrName + ', Allowed: ' + Object.keys(COMPILER_ATTRIBUTE_HANDLERS));
                }

                handler(attr, compilerOptions);
            });

            return;
        }

        this.prevTextNode = null;

        var node;

        var elDef = {
            tagName: tagName,
            argument: argument,
            attributes: attributes.map((attr) => {
                var isLiteral = false;

                if (attr.hasOwnProperty('literalValue')) {
                    isLiteral = true;
                }

                var attrDef = {
                    name: attr.name,
                    value: isLiteral ?
                        builder.literal(attr.literalValue) :
                        parseExpression(attr.expression)
                };

                if (attr.argument) {
                    attrDef.argument = attr.argument;
                }

                return attrDef;
            })
        };


        var tagDef = context.taglibLookup.getTag(tagName);
        if (tagDef) {
            var nodeFactoryFunc = tagDef.getNodeFactory();
            if (nodeFactoryFunc) {
                node = nodeFactoryFunc(elDef, context);
            }
        }

        if (!node) {
            node = builder.htmlElement(elDef);
        }

        node.pos = el.pos;

        this.parentNode.appendChild(node);

        this.stack.push({
            node: node,
            tag: null
        });
    }

    handleEndElement(elementName) {
        if (elementName === 'compiler-options') {
            return;
        }

        this.prevTextNode = null;

        this.stack.pop();
    }

    handleComment(comment) {
        var builder = this.context.builder;

        var compilerOptions = this.compilerOptions;
        var preserveComment = (compilerOptions && compilerOptions.preserveComments === true) ||
            isIEConditionalComment(comment);

        if (preserveComment) {
            var commentNode = builder.htmlComment(comment);
            this.parentNode.appendChild(commentNode);
        }
    }

    handleBodyTextPlaceholder(expression, escape) {
        var builder = this.context.builder;

        var textOutput = builder.textOutput(expression, escape);
        this.parentNode.appendChild(textOutput);
    }

    get parentNode() {
        var last = this.stack[this.stack.length-1];
        return last.node;
    }
}

module.exports = Parser;