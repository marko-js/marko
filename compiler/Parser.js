'use strict';
var ok = require('assert').ok;
var path = require('path');

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

function getTaglibPath(taglibPath) {
    if (typeof window === 'undefined') {
        return path.relative(process.cwd(), taglibPath);
    } else {
        return taglibPath;
    }
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

        var taglibLookup = context.taglibLookup;
        var tagDef = taglibLookup.getTag(tagName);
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

        var foundAttrs = {};

        // Validate the attributes
        attributes.forEach((attr) => {
            let attrName = attr.name;
            let attrDef = taglibLookup.getAttribute(tagName, attrName);
            if (!attrDef) {
                if (tagDef) {
                    // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                    //Tag doesn't allow dynamic attributes
                    context.addError({
                        node: node,
                        message: 'The tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '" does not support attribute "' + attrName + '"'
                    });

                }
                return;
            }

            attr.def = attrDef;

            foundAttrs[attrName] = true;
        });

        if (tagDef) {
            // Add default values for any attributes. If an attribute has a declared
            // default value and the attribute was not found on the element
            // then add the attribute with the specified default value
            tagDef.forEachAttribute(function (attrDef) {
                var attrName = attrDef.name;

                if (attrDef.hasOwnProperty('defaultValue') && !foundAttrs.hasOwnProperty(attrName)) {
                    attributes.push({
                        name: attrName,
                        value: builder.literal(attrDef.defaultValue)
                    });
                } else if (attrDef.required === true) {
                    // TODO Only throw an error if there is no data argument provided (just HTML attributes)
                    if (!foundAttrs.hasOwnProperty(attrName)) {
                        context.addError({
                            node: node,
                            message: 'The "' + attrName + '" attribute is required for tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '".'
                        });
                    }
                }
            });
        }

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
        this.prevTextNode = null;

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
        this.prevTextNode = null;

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