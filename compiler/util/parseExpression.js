'use strict';

const esprima = require('esprima');
const Expression = require('../ast/Expression');
var compiler = require('../');

function convert(node) {
    var builder = compiler.defaultBuilder;

    switch(node.type) {
        case 'Program': {
            if (node.body && node.body.length === 1) {
                return convert(node.body[0]);
            }
            return null;
        }
        case 'ExpressionStatement': {
            return convert(node.expression);
        }
        case 'Identifier': {
            return builder.identifier(node.name);
        }
        case 'Literal': {
            return builder.literal(node.value);
        }
        case 'BinaryExpression': {
            let left = convert(node.left);
            if (!left) {
                return null;
            }

            let right = convert(node.right);
            if (!right) {
                return null;
            }

            return builder.binaryExpression(left, node.operator, right);
        }
        case 'UnaryExpression': {
            let argument = convert(node.argument);
            if (!argument) {
                return null;
            }

            return builder.unaryExpression(argument, node.operator, node.prefix);
        }
        case 'AssignmentExpression': {
            let left = convert(node.left);
            if (!left) {
                return null;
            }

            let right = convert(node.right);
            if (!right) {
                return null;
            }

            return builder.assignment(left, right, node.operator);
        }
        case 'MemberExpression': {
            let object = convert(node.object);
            if (!object) {
                return null;
            }

            let property = convert(node.property);
            if (!property) {
                return null;
            }

            return builder.memberExpression(object, property, node.computed);
        }
        default:
            return null;
    }
}

function parseExpression(src) {
    let jsAST = esprima.parse(src);
    var converted = convert(jsAST);
    if (converted == null) {
        converted = new Expression({value: src});
    }

    return converted;
}

module.exports = parseExpression;