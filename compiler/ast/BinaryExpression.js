'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

function generateCodeForOperand(node, codegen) {
    var wrap = isCompoundExpression(node);

    if (wrap) {
        codegen.write('(');
    }

    codegen.generateCode(node);

    if (wrap) {
        codegen.write(')');
    }
}

function operandToString(node) {
    var wrap = isCompoundExpression(node);

    var result = '';

    if (wrap) {
        result += '(';
    }

    result += node.toString();

    if (wrap) {
        result += ')';
    }

    return result;
}

class BinaryExpression extends Node {
    constructor(def) {
        super('BinaryExpression');
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
    }

    generateCode(codegen) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        if (left.type === 'Literal' && right.type === 'Literal') {
            if (operator === '+') {
                return codegen.generateCode(codegen.builder.literal(left.value + right.value));
            } else if (operator === '-') {
                return codegen.generateCode(codegen.builder.literal(left.value - right.value));
            } else if (operator === '*') {
                return codegen.generateCode(codegen.builder.literal(left.value * right.value));
            } else if (operator === '/') {
                return codegen.generateCode(codegen.builder.literal(left.value / right.value));
            }
        }

        generateCodeForOperand(left, codegen);
        codegen.write(' ');
        codegen.generateCode(operator);
        codegen.write(' ');
        generateCodeForOperand(right, codegen);
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'BinaryExpression',
            left: this.left,
            operator: this.operator,
            right: this.right
        };
    }

    walk(walker) {
        this.left = walker.walk(this.left);
        this.right = walker.walk(this.right);
    }

    toString() {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        return operandToString(left) + ' ' + operator + ' ' + operandToString(right);
    }
}

module.exports = BinaryExpression;