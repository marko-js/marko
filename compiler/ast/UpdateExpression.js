'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

class UpdateExpression extends Node {
    constructor(def) {
        super('UpdateExpression');
        this.argument = def.argument;
        this.operator = def.operator;
        this.prefix = def.prefix === true;
    }

    generateCode(generator) {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        if (prefix) {
            generator.generateCode(operator);
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            generator.write('(');
        }

        generator.generateCode(argument);

        if (wrap) {
            generator.write(')');
        }

        if (!prefix) {
            generator.generateCode(operator);
        }
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'UpdateExpression',
            argument: this.argument,
            operator: this.operator,
            prefix: this.prefix
        };
    }
}

module.exports = UpdateExpression;