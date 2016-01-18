'use strict';
var Node = require('./Node');
var Literal = require('./Literal');
var ok = require('assert').ok;
var escapeXmlAttr = require('raptor-util/escapeXml').attr;
var parseExpression = require('../util/parseExpression');
var removeEscapeFunctions = require('../util/removeEscapeFunctions');

function isStringLiteral(node) {
    return node.type === 'Literal' && typeof node.value === 'string';
}

function isNoEscapeXml(node) {
    return node.type === 'FunctionCall' &&
        node.callee.type === 'Identifier' &&
        node.callee.name === '$noEscapeXml';
}

function isStringExpression(node) {
    return node.type === 'FunctionCall' && node.callee.type === 'Identifier' &&
        (node.callee.name === '$noEscapeXml' || node.callee.name === '$escapeXml');
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
            isString: isStringLiteral(node) || isStringExpression(node),
            concats: [node]
        };
    }

    var final = flattenHelper(node);
    return final.concats;
}

function generateCodeForExpressionAttr(name, value, codegen) {
    var flattenedConcats = flattenAttrConcats(value);
    var hasLiteral = false;

    for (let i=0; i<flattenedConcats.length; i++) {
        if (flattenedConcats[i].type === 'Literal') {
            hasLiteral = true;
            break;
        }
    }

    if (hasLiteral) {
        codegen.addWriteLiteral(' ' + name + '="');
        for (let i=0; i<flattenedConcats.length; i++) {
            var part = flattenedConcats[i];
            if (isStringLiteral(part)) {
                part.value = escapeXmlAttr(part.value);
            } else if (part.type === 'Literal') {

            } else if (isNoEscapeXml(part)) {
                part = removeEscapeFunctions(part);
                part = codegen.builder.functionCall(codegen.builder.identifier('str'), [part]);
            } else {
                var escapeXmlAttrVar = codegen.addStaticVar('escapeXmlAttr', '__helpers.xa');
                part = removeEscapeFunctions(part);
                part = codegen.builder.functionCall(escapeXmlAttrVar, [part]);
            }
            codegen.addWrite(part);
        }
        codegen.addWriteLiteral('"');
    } else {

        // let builder = codegen.builder;
        // let valueWithEscaping = handleEscaping(value);
        let attrVar = codegen.addStaticVar('attr', '__helpers.a');

        var escape = true;

        if (isNoEscapeXml(value)) {
            escape = false;
        }

        value = removeEscapeFunctions(value);
        let attrArgs = [codegen.builder.literal(name), value];

        if (escape === false) {
            attrArgs.push(codegen.builder.literal(false));
        }
        codegen.addWrite(codegen.builder.functionCall(attrVar, attrArgs));
    }
}


class HtmlAttribute extends Node {
    constructor(def) {
        super('HtmlAttribute');

        ok(def, 'Invalid attribute definition');
        this.type = 'HtmlAttribute';
        this.name = def.name;
        this.value = def.value;

        if (typeof this.value === 'string') {
            this.value = parseExpression(this.value);
        }

        this.argument = def.argument;

        this.def = def.def; // The attribute definition loaded from the taglib (if any)
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

        if (this.isLiteralValue()) {
            var literalValue = value.value;
            if (typeof literalValue === 'boolean' || literalValue === '') {
                if (literalValue === true || literalValue === '') {
                    codegen.addWriteLiteral(' ' + name);
                }
            } else if (literalValue != null) {
                codegen.addWriteLiteral(' ' + name + '="' + escapeXmlAttr(literalValue) + '"');
            }

        } else if (value != null) {
            codegen.isInAttribute = true;
            generateCodeForExpressionAttr(name, value, codegen);
            codegen.isInAttribute = false;
        } else if (argument) {
            codegen.addWriteLiteral(' ' + name + '(');
            codegen.addWriteLiteral(argument);
            codegen.addWriteLiteral(')');
        } else {
            // Attribute with no value is a boolean attribute
            codegen.addWriteLiteral(' ' + name);
        }
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }
}

HtmlAttribute.isHtmlAttribute = function(attr) {
    return (attr instanceof HtmlAttribute);
};

module.exports = HtmlAttribute;