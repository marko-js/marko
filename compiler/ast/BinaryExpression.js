'use strict';

var Node = require('./Node');

class BinaryExpression extends Node {
    constructor(def) {
        super('BinaryExpression');
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
        this.parens = def.parens === true;
    }

    generateCode(generator) {
        var left = this.left;
        var right = this.right;
        var parens = this.parens || this.data.isSubExpression;

        if (left instanceof Node) {
            left.data.isSubExpression = true;
        }

        if (right instanceof Node) {
            right.data.isSubExpression = true;
        }

        if (parens) {
            generator.write('(');
        }

        generator.generateCode(this.left);
        generator.write(' ');
        generator.generateCode(this.operator);
        generator.write(' ');
        generator.generateCode(this.right);

        if (parens) {
            generator.write(')');
        }
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