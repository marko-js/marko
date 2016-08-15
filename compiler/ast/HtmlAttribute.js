'use strict';
var Node = require('./Node');
var Literal = require('./Literal');
var ok = require('assert').ok;
var escapeXmlAttr = require('raptor-util/escapeXml').attr;
var attr = require('raptor-util/attr');
var compiler = require('../');

function isStringLiteral(node) {
    return node.type === 'Literal' && typeof node.value === 'string';
}

function isNoEscapeXml(node) {
    return node.type === 'AttributePlaceholder' &&
        node.escape === false;
}

function flattenAttrConcats(node) {
    // return [node];

    function flattenHelper(node) {
        if (node.type === 'BinaryExpression' && node.operator === '+') {
            let left = flattenHelper(node.left);
            let right = flattenHelper(node.right);

            var isString = left.isString || right.isString;

            if (isString) {
                return {
                    isString: true,
                    concats: left.concats.concat(right.concats)
                };
            } else {
                return {
                    isString: false,
                    concats: [node]
                };
            }

        }

        return {
            isString: isStringLiteral(node) || node.type === 'AttributePlaceholder',
            concats: [node]
        };
    }

    var final = flattenHelper(node);
    return final.concats;
}

function generateCodeForExpressionAttr(name, value, escape, codegen) {
    var flattenedConcats = flattenAttrConcats(value);
    var hasLiteral = false;
    var builder = codegen.builder;
    var finalNodes = [];
    var context = codegen.context;

    function addHtml(argument) {
        finalNodes.push(builder.html(argument));
    }

    function addHtmlLiteral(value) {
        finalNodes.push(builder.htmlLiteral(value));
    }


    for (let i=0; i<flattenedConcats.length; i++) {
        if (flattenedConcats[i].type === 'Literal') {
            hasLiteral = true;
            break;
        }
    }

    if (hasLiteral) {
        addHtmlLiteral(' ' + name + '="');
        for (let i=0; i<flattenedConcats.length; i++) {
            var part = flattenedConcats[i];
            if (isStringLiteral(part)) {
                part.value = escapeXmlAttr(part.value);
            } else if (part.type === 'Literal') {

            } else if (isNoEscapeXml(part)) {
                part = codegen.builder.functionCall(context.helper('str'), [part]);
            } else {
                if (escape !== false) {
                    part = codegen.builder.functionCall(context.helper('escapeXmlAttr'), [part]);
                }
            }
            addHtml(part);
        }
        addHtmlLiteral('"');
    } else {
        if (name === 'class') {
            addHtml(codegen.builder.functionCall(context.helper('classAttr'), [value]));
        } else if (name === 'style') {
            addHtml(codegen.builder.functionCall(context.helper('styleAttr'), [value]));
        } else {
            if (escape === false || isNoEscapeXml(value)) {
                escape = false;
            }

            let attrArgs = [codegen.builder.literal(name), value];

            if (escape === false) {
                attrArgs.push(codegen.builder.literal(false));
            }
            addHtml(codegen.builder.functionCall(context.helper('attr'), attrArgs));
        }
    }

    return finalNodes;
}


function beforeGenerateCode(event) {
    event.codegen.isInAttribute = true;
}

function afterGenerateCode(event) {
    event.codegen.isInAttribute = false;
}

class HtmlAttribute extends Node {
    constructor(def) {
        super('HtmlAttribute');

        ok(def, 'Invalid attribute definition');
        this.type = 'HtmlAttribute';
        this.name = def.name;
        this.value = def.value;
        this.rawValue = def.rawValue;
        this.escape = def.escape;

        if (typeof this.value === 'string') {
            this.value = compiler.builder.parseExpression(this.value);
        }

        if (this.value && !(this.value instanceof Node)) {
            throw new Error('"value" should be a Node instance');
        }

        this.argument = def.argument;

        this.def = def.def; // The attribute definition loaded from the taglib (if any)

        this.on('beforeGenerateCode', beforeGenerateCode);
        this.on('afterGenerateCode', afterGenerateCode);
    }

    isLiteralValue() {
        return this.value instanceof Literal;
    }

    isLiteralString() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'string';
    }

    isLiteralBoolean() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'boolean';
    }

    generateHtmlCode(codegen) {
        let name = this.name;
        let value = this.value;
        let argument = this.argument;
        let escape = this.escape !== false;
        var builder = codegen.builder;

        if (!name) {
            return null;
        }

        if (this.isLiteralValue()) {
            return builder.htmlLiteral(attr(name, value.value));
        } else if (value != null) {
            return generateCodeForExpressionAttr(name, value, escape, codegen);
        } else if (argument) {
            return [
                builder.htmlLiteral(' ' + name + '('),
                builder.htmlLiteral(argument),
                builder.htmlLiteral(')')
            ];
        } else {
            // Attribute with no value is a boolean attribute
            return builder.htmlLiteral(' ' + name);
        }
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }

    get literalValue() {
        if (this.isLiteralValue()) {
            return this.value.value;
        } else {
            throw new Error('Attribute value is not a literal value. Actual: ' + JSON.stringify(this.value, null, 2));
        }
    }
}

HtmlAttribute.isHtmlAttribute = function(attr) {
    return (attr instanceof HtmlAttribute);
};

module.exports = HtmlAttribute;