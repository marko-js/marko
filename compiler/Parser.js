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

function mergeShorthandClassNames(el, shorthandClassNames, context) {
    var builder = context.builder;
    let classNames = shorthandClassNames.map((className) => {
        return builder.parseExpression(className.value);
    });

    var classAttr = el.getAttributeValue('class');
    if (classAttr) {
        classNames.push(classAttr);
    }

    let prevClassName;

    var finalClassNames = [];

    for (var i=0; i<classNames.length; i++) {
        let className = classNames[i];
        if (prevClassName && className.type === 'Literal' && prevClassName.type === 'Literal') {
            prevClassName.value += ' ' + className.value;
        } else {
            finalClassNames.push(className);
            prevClassName = className;
        }
    }

    if (finalClassNames.length === 1) {
        el.setAttributeValue('class', finalClassNames[0]);
    } else {
        var classListVar = context.addStaticVar('__classList', '__helpers.cl');
        el.setAttributeValue('class', builder.functionCall(classListVar, finalClassNames));
    }
}

class Parser {
    constructor(parserImpl, options) {
        ok(parserImpl, '"parserImpl" is required');

        this.parserImpl = parserImpl;

        this.prevTextNode = null;
        this.stack = null;

        this.raw = options && options.raw === true;

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

        var raw = this.raw;

        if (!raw) {
            if (tagNameExpression) {
                tagName = builder.parseExpression(tagNameExpression);
            } else if (tagName === 'marko-compiler-options') {
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
        }

        this.prevTextNode = null;

        var attributeParseErrors = [];

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
                    let parsedExpression;
                    let valid = true;
                    try {
                        parsedExpression = builder.parseExpression(attr.value);
                    } catch(e) {
                        valid = false;
                        attributeParseErrors.push('Invalid JavaScript expression for attribute "' + attr.name + '": ' + e);
                    }

                    if (valid) {
                        if (raw) {
                            attrValue = parsedExpression;
                        } else {
                            attrValue = replacePlaceholderEscapeFuncs(parsedExpression, context);
                        }
                    } else {
                        attrValue = null;
                    }
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

        var node;

        if (raw) {

            node = builder.htmlElement(elDef);
            node.pos = elDef.pos;

            let taglibLookup = this.context.taglibLookup;
            let tagDef = taglibLookup.getTag(tagName);
            node.tagDef = tagDef;
        } else {
            node = this.context.createNodeForEl(elDef);
        }

        if (attributeParseErrors.length) {

            attributeParseErrors.forEach((e) => {
                context.addError(node, e);
            });
        }

        if (raw) {
            if (el.shorthandId) {
                let parsed = builder.parseExpression(el.shorthandId.value);
                node.rawShorthandId = parsed.value;
            }

            if (el.shorthandClassNames) {
                node.rawShorthandClassNames = el.shorthandClassNames.map((className) => {
                    let parsed = builder.parseExpression(className.value);
                    return parsed.value;
                });
            }
        } else {
            if (el.shorthandClassNames) {
                mergeShorthandClassNames(node, el.shorthandClassNames, context);
            }

            if (el.shorthandId) {
                if (node.hasAttribute('id')) {
                    context.addError(node, 'A shorthand ID cannot be used in conjunction with the "id" attribute');
                } else {
                    node.setAttributeValue('id', builder.parseExpression(el.shorthandId.value));
                }
            }
        }

        this.parentNode.appendChild(node);

        this.stack.push({
            node: node,
            tag: null
        });
    }

    handleEndElement(elementName) {
        if (this.raw !== true) {
            if (elementName === 'marko-compiler-options') {
                return;
            }
        }

        this.prevTextNode = null;

        this.stack.pop();
    }

    handleComment(comment) {
        this.prevTextNode = null;

        var builder = this.context.builder;

        var preserveComment = this.context.isPreserveComments() ||
            isIEConditionalComment(comment);

        if (this.raw || preserveComment) {
            var commentNode = builder.htmlComment(builder.literal(comment));
            this.parentNode.appendChild(commentNode);
        }
    }

    handleDeclaration(value) {
        this.prevTextNode = null;

        var builder = this.context.builder;

        var declarationNode = builder.declaration(builder.literal(value));
        this.parentNode.appendChild(declarationNode);
    }

    handleDocumentType(value) {
        this.prevTextNode = null;

        var builder = this.context.builder;

        var docTypeNode = builder.documentType(builder.literal(value));
        this.parentNode.appendChild(docTypeNode);
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