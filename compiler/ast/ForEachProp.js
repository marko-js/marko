'use strict';
var ok = require('assert').ok;
var Node = require('./Node');

class ForEachProp extends Node {
    constructor(def) {
        super('ForEachProp');
        this.nameVarName = def.nameVarName;
        this.valueVarName = def.valueVarName;
        this.in = def.in;
        this.body = this.makeContainer(def.body);

        ok(this.nameVarName, '"nameVarName" is required');
        ok(this.valueVarName != null, '"valueVarName" is required');
        ok(this.in != null, '"in" is required');
    }

    generateCode(codegen) {
        var nameVarName = this.nameVarName;
        var valueVarName = this.valueVarName;
        var inExpression = this.in;
        var body = this.body;

        var builder = codegen.builder;

        let forEachVarName = codegen.addStaticVar('forEachProp', '__helpers.fp');

        return builder.functionCall(forEachVarName, [
            inExpression,
            builder.functionDeclaration(null, [nameVarName, valueVarName], body)
        ]);

    }

    walk(walker) {
        this.nameVarName = walker.walk(this.nameVarName);
        this.valueVarName = walker.walk(this.valueVarName);
        this.in = walker.walk(this.in);
        this.body = walker.walk(this.body);
    }
}

module.exports = ForEachProp;