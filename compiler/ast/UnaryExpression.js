'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

class UnaryExpression extends Node {
    constructor(def) {
        super('UnaryExpression');
        this.argument = def.argument;
        this.operator = def.operator;
        this.prefix = def.prefix === true;
    }

    generateCode(codegen) {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        if (prefix) {
            codegen.write(operator);

            if (operator === 'typeof' || operator === 'delete') {
                codegen.write(' ');
            }
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            codegen.write('(');
        }

        codegen.generateCode(argument);

        if (wrap) {
            codegen.write(')');
        }

        if (!prefix) {
            codegen.write(operator);
        }
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'UnaryExpression',
            argument: this.argument,
            operator: this.operator,
            prefix: this.prefix
        };
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }

    toString() {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        let result = '';

        if (prefix) {
            result += operator;

            if (operator === 'typeof' || operator === 'delete') {
                result += ' ';
            }
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            result += '(';
        }

        result += argument;

        if (wrap) {
            result += ')';
        }

        if (!prefix) {
            result += operator;
        }

        return result;
    }
}

module.exports = UnaryExpression;