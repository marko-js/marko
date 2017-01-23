'use strict';

var runtimeHtmlHelpers = require('../../../../runtime/html/helpers');
var attr = runtimeHtmlHelpers.a;
var escapeXmlAttr = runtimeHtmlHelpers.xa;

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
        if (flattenedConcats[i].type === 'Literal' || flattenedConcats[i].type === 'AttributePlaceholder') {
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
                    part = builder.functionCall(context.helper('escapeXmlAttr'), [part]);
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

module.exports = function generateCode(node, codegen) {
    let name = node.name;
    let value = node.value;
    let argument = node.argument;
    let escape = node.escape !== false;
    var builder = codegen.builder;

    if (!name) {
        return null;
    }

    if (node.isLiteralValue()) {
        let literalValue = value.value;

        if (literalValue instanceof RegExp) {
            literalValue = literalValue.source;
        }

        return builder.htmlLiteral(attr(name, literalValue));
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
};
