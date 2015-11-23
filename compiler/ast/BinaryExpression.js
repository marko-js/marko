'use strict';

var Node = require('./Node');

class BinaryExpression extends Node {
    constructor(def) {
        super('BinaryExpression');
        this.left = def.left;
        this.right = def.right;
        this.operator = def.operator;
    }

    generateCode(generator) {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        generator.generateCode(left);
        generator.write(' ' + operator + ' ');
        generator.generateCode(right);
    }
}

module.exports = BinaryExpression;