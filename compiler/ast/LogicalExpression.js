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

function operandToString(node, codegen) {
    var wrap = isCompoundExpression(node);

    var result = '';

    if (wrap) {
        result += '(';
    }

    result += node;

    if (wrap) {
        result += ')';
    }

    return result;
}

class LogicalExpression extends Node {
    constructor(def) {
        super('LogicalExpression');
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
    }

    generateCode(codegen) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid LogicalExpression: ' + this);
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
            type: 'LogicalExpression',
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
            throw new Error('Invalid LogicalExpression: ' + this);
        }

        return operandToString(left) + ' ' + operator + ' ' + operandToString(right);
    }
}

module.exports = LogicalExpression;