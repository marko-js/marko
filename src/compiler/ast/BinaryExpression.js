'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

function writeCodeForOperand(node, writer) {
    var wrap = isCompoundExpression(node);

    if (wrap) {
        writer.write('(');
    }

    writer.write(node);

    if (wrap) {
        writer.write(')');
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
        this.left = codegen.generateCode(this.left);
        this.right = codegen.generateCode(this.right);

        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        var builder = codegen.builder;

        if (left.type === 'Literal' && right.type === 'Literal') {
            if (operator === '+') {
                return builder.literal(left.value + right.value);
            } else if (operator === '-') {
                return builder.literal(left.value - right.value);
            } else if (operator === '*') {
                return builder.literal(left.value * right.value);
            } else if (operator === '/') {
                return builder.literal(left.value / right.value);
            }
        }

        return this;
    }

    writeCode(writer) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        writeCodeForOperand(left, writer);
        writer.write(' ');
        writer.write(operator);
        writer.write(' ');
        writeCodeForOperand(right, writer);
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