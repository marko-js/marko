'use strict';

var Node = require('./Node');

class Assignment extends Node {
    constructor(def) {
        super('Assignment');
        this.left = def.left;
        this.right = def.right;
        this.operator = def.operator;
    }

    generateCode(codegen) {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        codegen.generateCode(left);
        codegen.write(' '  + (operator || '=') + ' ');

        var wrap = right instanceof Assignment;

        if (wrap) {
            codegen.write('(');
        }

        codegen.generateCode(right);

        if (wrap) {
            codegen.write(')');
        }
    }

    isCompoundExpression() {
        return true;
    }
}

module.exports = Assignment;