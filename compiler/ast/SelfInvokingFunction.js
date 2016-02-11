'use strict';

var Node = require('./Node');

class SelfInvokingFunction extends Node {
    constructor(def) {
        super('SelfInvokingFunction');
        this.params = def.params;
        this.args = def.args;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var params = this.params || [];
        var args = this.args || [];
        var body = this.body;

        codegen.write('(');
        var functionDeclaration = codegen.builder.functionDeclaration(null, params, body);
        var functionCall = codegen.builder.functionCall(functionDeclaration, args);
        codegen.generateCode(functionCall);

        codegen.write(')');
    }

    walk(walker) {
        this.params = walker.walk(this.params);
        this.args = walker.walk(this.args);
        this.body = walker.walk(this.body);
    }
}

module.exports = SelfInvokingFunction;