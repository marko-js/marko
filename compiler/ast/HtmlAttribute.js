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
                part = codegen.builder.functionCall(codegen.builder.identifier('str'), [part]);
            } else {
                if (escape !== false) {
                    var escapeXmlAttrVar = codegen.getEscapeXmlAttrVar();
                    part = codegen.builder.functionCall(escapeXmlAttrVar, [part]);
                }
            }
            codegen.addWrite(part);
        }
        codegen.addWriteLiteral('"');
    } else {
        if (name === 'class') {
            // let builder = codegen.builder;
            // let valueWithEscaping = handleEscaping(value);
            let classAttrVar = codegen.addStaticVar('classAttr', '__helpers.ca');
            codegen.addWrite(codegen.builder.functionCall(classAttrVar, [value]));
        } else if (name === 'style') {
            // let builder = codegen.builder;
            // let valueWithEscaping = handleEscaping(value);
            let styleAttrVar = codegen.addStaticVar('styleAttr', '__helpers.sa');
            codegen.addWrite(codegen.builder.functionCall(styleAttrVar, [value]));
        } else {
            // let builder = codegen.builder;
            // let valueWithEscaping = handleEscaping(value);
            let attrVar = codegen.addStaticVar('attr', '__helpers.a');

            if (escape === false || isNoEscapeXml(value)) {
                escape = false;
            }

            let attrArgs = [codegen.builder.literal(name), value];

            if (escape === false) {
                attrArgs.push(codegen.builder.literal(false));
            }
            codegen.addWrite(codegen.builder.functionCall(attrVar, attrArgs));
        }
    }
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

        if (!name) {
            return;
        }

        if (this.isLiteralValue()) {
            codegen.addWriteLiteral(attr(name, value.value));
        } else if (value != null) {
            codegen.isInAttribute = true;
            generateCodeForExpressionAttr(name, value, escape, codegen);
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