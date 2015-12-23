'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

function generateCodeForOperand(node, generator) {
    var wrap = isCompoundExpression(node);

    if (wrap) {
        generator.write('(');
    }

    generator.generateCode(node);

    if (wrap) {
        generator.write(')');
    }
}

class BinaryExpression extends Node {
    constructor(def) {
        super('BinaryExpression');
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
    }

    generateCode(generator) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        generateCodeForOperand(left, generator);
        generator.write(' ');
        generator.generateCode(operator);
        generator.write(' ');
        generateCodeForOperand(right, generator);
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
}

module.exports = BinaryExpression;