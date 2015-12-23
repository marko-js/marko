'use strict';

var Node = require('./Node');

class Assignment extends Node {
    constructor(def) {
        super('Assignment');
        this.left = def.left;
        this.right = def.right;
        this.operator = def.operator;
    }

    generateCode(generator) {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        generator.generateCode(left);
        generator.write(' '  + (operator || '=') + ' ');

        var wrap = right instanceof Assignment;

        if (wrap) {
            generator.write('(');
        }

        generator.generateCode(right);

        if (wrap) {
            generator.write(')');
        }
    }

    isCompoundExpression() {
        return true;
    }
}

module.exports = Assignment;