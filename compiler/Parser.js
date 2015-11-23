'use strict';

var charProps = require('char-props');
var path = require('path');
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

function getRelativePath(absolutePath) {
    if (typeof window === 'undefined') {
        absolutePath = path.resolve(process.cwd(), absolutePath);
        return path.relative(process.cwd(), absolutePath);
    } else {
        return absolutePath;
    }
}

class Pos {
    constructor(path, line, column) {
        this.path = getRelativePath(path);
        this.line = line;
        this.column = column;
    }

    toString() {
        return this.path + ":" + this.line + ":" + this.column;
    }
}

class Parser {
    constructor(options) {
        ok(options, '"options" is required');
        ok(options.compiler, '"options.compiler" is required');
        ok(options.compiler.builder, '"options.compiler.builder" is required');

        this.compiler = options.compiler;
        this.builder = this.compiler.builder;
        this.taglibLookup = this.compiler.taglibLookup;
        this._reset();
    }

    _reset() {
        // Cleanup
        this.src = null;
        this.path = null;
        this.charProps = null;
        this.prevTextNode = null;
        this.compilerOptions = {};
        this.stack = [];
    }

    parse(src, path) {
        ok(path, '"path" is required');
        var rootNode = this.builder.templateRoot();
        this.stack.push({
            node: rootNode
        });

        this.src = src;
        this.path = path;
        this.doParse(src, path);
        this._reset();
        return rootNode;
    }

    handleCharacters(text) {
        if (this.prevTextNode && this.prevTextNode.isLiteral()) {
            this.prevTextNode.appendText(text);
        } else {
            this.prevTextNode = this.builder.textOutput(this.builder.literal(text));
            this.prevTextNode.pos = this.getPos();
            this.parentNode.appendChild(this.prevTextNode);
        }
    }

    handleStartElement(el) {
        var builder = this.builder;

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

        var compiler = this.compiler;
        var tagDef = compiler.taglibLookup.getTag(tagName);
        if (tagDef) {
            var nodeFactoryFunc = tagDef.getNodeFactory();
            if (nodeFactoryFunc) {
                node = nodeFactoryFunc(elDef, compiler);
            }
        }

        if (!node) {
            node = builder.htmlElement(elDef);
        }

        node.pos = this.getPos();

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
        var compilerOptions = this.compilerOptions;
        var preserveComment = (compilerOptions && compilerOptions.preserveComments === true) ||
            isIEConditionalComment(comment);

        if (preserveComment) {
            var commentNode = this.builder.htmlComment(comment);
            this.parentNode.appendChild(commentNode);
        }
    }

    handleBodyTextPlaceholder(expression, escape) {
        var textOutput = this.builder.textOutput(expression, escape);
        this.parentNode.appendChild(textOutput);
    }

    createPos(line, column) {
        if (arguments.length === 1) {
            var index = arguments[0];
            if (!this.charProps) {
                this.charProps = charProps(this.src);
            }
            line = this.charProps.lineAt(index)+1;
            column = this.charProps.columnAt(index);
        }

        return new Pos(this.path, line, column);
    }

    get parentNode() {
        var last = this.stack[this.stack.length-1];
        return last.node;
    }
}

module.exports = Parser;