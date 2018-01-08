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
        this.left = codegen.generateCode(this.left);
        this.right = codegen.generateCode(this.right);
        return this;
    }

    writeCode(writer) {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        writer.write(left);
        writer.write(' '  + (operator || '=') + ' ');

        var wrap = right instanceof Assignment;

        if (wrap) {
            writer.write('(');
        }

        writer.write(right);

        if (wrap) {
            writer.write(')');
        }
    }

    walk(walker) {
        this.left = walker.walk(this.left);
        this.right = walker.walk(this.right);
    }

    isCompoundExpression() {
        return true;
    }

    /**
     * "noOutput" should be true if the Node.js does not result in any HTML or Text output
     */
    get noOutput() {
        return !(this.body && this.body.length);
    }

    toString() {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        var result = left.toString() + ' ' + (operator || '=') + ' ';

        var wrap = right instanceof Assignment;

        if (wrap) {
            result += '(';
        }

        result += right.toString();

        if (wrap) {
            result += ')';
        }

        return result;
    }
}

module.exports = Assignment;