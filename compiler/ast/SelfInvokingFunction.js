'use strict';

var Node = require('./Node');

class SelfInvokingFunction extends Node {
    constructor(def) {
        super('SelfInvokingFunction');
        this.params = def.params;
        this.args = def.args;
        this.body = this.makeContainer(def.body);
    }

    generateCode(generator) {
        var params = this.params || [];
        var args = this.args || [];
        var body = this.body;

        generator.write('(');
        var functionDeclaration = generator.builder.functionDeclaration(null, params, body);
        var functionCall = generator.builder.functionCall(functionDeclaration, args);
        generator.generateCode(functionCall);

        generator.write(')');
    }
}

module.exports = SelfInvokingFunction;