'use strict';
var ok = require('assert').ok;
var AttributePlaceholder = require('./ast/AttributePlaceholder');

var COMPILER_ATTRIBUTE_HANDLERS = {
    'preserve-whitespace': function(attr, context) {
        context.setPreserveWhitespace(true);
    },
    'preserve-comments': function(attr, context) {
        context.setPreserveComments(true);
    }
};

var ieConditionalCommentRegExp = /^\[if [^]*?<!\[endif\]$/;

function isIEConditionalComment(comment) {
    return ieConditionalCommentRegExp.test(comment);
}

function replacePlaceholderEscapeFuncs(node, context) {

    var walker = context.createWalker({
        exit: function(node, parent) {
            if (node.type === 'FunctionCall' &&
                node.callee.type === 'Identifier') {

                if (node.callee.name === '$noEscapeXml') {
                    return new AttributePlaceholder({escape: false, value: node.args[0]});
                } else if (node.callee.name === '$escapeXml') {
                    return new AttributePlaceholder({escape: true, value: node.args[0]});
                }
            }
        }
    });

    return walker.walk(node);
}

class Parser {
    constructor(parserImpl) {
        ok(parserImpl, '"parserImpl" is required');

        this.parserImpl = parserImpl;

        this.prevTextNode = null;
        this.stack = null;

        // The context gets provided when parse is called
        // but we store it as part of the object so that the handler
        // methods have access
        this.context = null;
    }

    _reset() {
        this.prevTextNode = null;
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
            var escape = false;
            this.prevTextNode = builder.text(builder.literal(text), escape);
            this.parentNode.appendChild(this.prevTextNode);
        }
    }

    handleStartElement(el) {
        var context = this.context;
        var builder = context.builder;

        var tagName = el.tagName;
        var tagNameExpression = el.tagNameExpression;
        var attributes = el.attributes;
        var argument = el.argument; // e.g. For <for(color in colors)>, argument will be "color in colors"

        if (argument) {
            argument = argument.value;
        }

        if (tagNameExpression) {
            tagName = builder.parseExpression(tagNameExpression);
        } else if (tagName === 'compiler-options') {
            attributes.forEach(function (attr) {
                let attrName = attr.name;
                let handler = COMPILER_ATTRIBUTE_HANDLERS[attrName];

                if (!handler) {
                    context.addError({
                        code: 'ERR_INVALID_COMPILER_OPTION',
                        message: 'Invalid Marko compiler option of "' + attrName + '". Allowed: ' + Object.keys(COMPILER_ATTRIBUTE_HANDLERS).join(', '),
                        pos: el.pos,
                        node: el
                    });
                    return;
                }

                handler(attr, context);
            });

            return;
        }

        this.prevTextNode = null;

        var elDef = {
            tagName: tagName,
            argument: argument,
            openTagOnly: el.openTagOnly === true,
            selfClosed: el.selfClosed === true,
            pos: el.pos,
            attributes: attributes.map((attr) => {
                var attrValue;
                if (attr.hasOwnProperty('literalValue')) {
                    attrValue = builder.literal(attr.literalValue);
                } else if (attr.value == null) {
                    attrValue = undefined;
                } else {
                    let parsedExpression = builder.parseExpression(attr.value);
                    attrValue = replacePlaceholderEscapeFuncs(parsedExpression, context);
                }

                var attrDef = {
                    name: attr.name,
                    value: attrValue,
                    rawValue: attr.value
                };

                if (attr.argument) {
                    // TODO Do something with the argument pos
                    attrDef.argument = attr.argument.value;
                }

                return attrDef;
            })
        };

        var node = this.context.createNodeForEl(elDef);


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

        var preserveComment = this.context.isPreserveComments() ||
            isIEConditionalComment(comment);

        if (preserveComment) {
            var commentNode = builder.htmlComment(builder.literal(comment));
            this.parentNode.appendChild(commentNode);
        }
    }

    handleBodyTextPlaceholder(expression, escape) {
        this.prevTextNode = null;
        var builder = this.context.builder;
        var parsedExpression = builder.parseExpression(expression);
        var preserveWhitespace = true;

        var text = builder.text(parsedExpression, escape, preserveWhitespace);
        this.parentNode.appendChild(text);
    }

    handleScriptlet(code) {
        this.prevTextNode = null;
        var builder = this.context.builder;
        var scriptlet = builder.scriptlet(code);
        this.parentNode.appendChild(scriptlet);
    }

    handleError(event) {
        this.context.addError({
            message: event.message,
            code: event.code,
            pos: event.pos,
            endPos: event.endPos
        });
    }

    get parentNode() {
        var last = this.stack[this.stack.length-1];
        return last.node;
    }

    getParserStateForTag(el) {
        var attributes = el.attributes;

        for (var i=0; i<attributes.length; i++) {
            var attr = attributes[i];
            var attrName = attr.name;
            if (attrName === 'marko-body') {
                var parseMode;

                if (attr.literalValue) {
                    parseMode = attr.literalValue;
                }

                if (parseMode === 'static-text' ||
                    parseMode === 'parsed-text' ||
                    parseMode === 'html') {
                    return parseMode;
                } else {
                    this.context.addError({
                        message: 'Value for "marko-body" should be one of the following: "static-text", "parsed-text", "html"',
                        code: 'ERR_INVALID_ATTR'
                    });
                    return;
                }
            } else if (attrName === 'marko-init') {
                return 'static-text';
            }
        }

        var tagName = el.tagName;
        var tagDef = this.context.getTagDef(tagName);

        if (tagDef) {
            var body = tagDef.body;
            if (body) {
                return body; // 'parsed-text' | 'static-text' | 'html'
            }
        }

        return null; // Default parse state
    }

    isOpenTagOnly(tagName) {
        var tagDef = this.context.getTagDef(tagName);
        return tagDef && tagDef.openTagOnly;
    }
}

module.exports = Parser;