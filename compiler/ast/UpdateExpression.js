'use strict';

var Node = require('./Node');

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

        generator.generateCode(argument);

        if (!prefix) {
            generator.generateCode(operator);
        }
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