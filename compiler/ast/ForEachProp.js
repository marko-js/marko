'use strict';
var ok = require('assert').ok;
var Node = require('./Node');

class ForEachProp extends Node {
    constructor(def) {
        super('ForEachProp');
        this.nameVarName = def.nameVarName;
        this.valueVarName = def.valueVarName;
        this.in = def.in;
        this.separator = def.separator;
        this.statusVarName = def.statusVarName;
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
        var separator = this.separator;
        var statusVarName = this.statusVarName;

        if (separator && !statusVarName) {
            statusVarName = '__loop';
        }

        var builder = codegen.builder;

        if (statusVarName) {
            let helperVar = builder.require(builder.literal('marko/runtime/forEachPropStatusVar'));
            let forEachVarName = codegen.addStaticVar('forEacPropStatusVar', helperVar);
            let body = this.body;

            if (separator) {
                let isNotLastTest = builder.functionCall(
                    builder.memberExpression(statusVarName, builder.identifier('isLast')),
                    []);

                isNotLastTest = builder.negate(isNotLastTest);

                body = body.items.concat([
                    builder.ifStatement(isNotLastTest, [
                        builder.text(separator)
                    ])
                ]);
            }

            return builder.functionCall(forEachVarName, [
                inExpression,
                builder.functionDeclaration(null, [nameVarName, valueVarName, statusVarName], body)
            ]);
        } else {
            let forEachVarName = codegen.addStaticVar('forEachProp', '__helpers.fp');
            return builder.functionCall(forEachVarName, [
                inExpression,
                builder.functionDeclaration(null, [nameVarName, valueVarName], body)
            ]);
        }
    }

    walk(walker) {
        this.nameVarName = walker.walk(this.nameVarName);
        this.valueVarName = walker.walk(this.valueVarName);
        this.in = walker.walk(this.in);
        this.body = walker.walk(this.body);
    }
}

module.exports = ForEachProp;