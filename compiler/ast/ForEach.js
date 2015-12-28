'use strict';
var ok = require('assert').ok;
var Node = require('./Node');

class ForEach extends Node {
    constructor(def) {
        super('ForEach');
        this.varName = def.varName;
        this.in = def.in;
        this.body = this.makeContainer(def.body);
        this.separator = def.separator;
        this.statusVarName = def.statusVarName;
        this.iterator = def.iterator;

        ok(this.varName, '"varName" is required');
        ok(this.in != null, '"in" is required');
    }

    generateCode(generator) {
        var varName = this.varName;
        var inExpression = this.in;
        var separator = this.separator;
        var statusVarName = this.statusVarName;
        var iterator = this.iterator;

        var builder = generator.builder;

        if (separator && !statusVarName) {
            statusVarName = '__loop';
        }

        if (iterator) {
            let params = [varName];

            if (statusVarName) {
                params.push(statusVarName);
            }

            return builder.functionCall(iterator, [
                inExpression,
                builder.functionDeclaration(null, params, this.body)
            ]);
        } else if (statusVarName) {
            let forEachVarName = generator.addStaticVar('forEachWithStatusVar', '__helpers.fv');
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
                builder.functionDeclaration(null, [varName, statusVarName], body)
            ]);
        } else {
            let forEachVarName = generator.addStaticVar('forEach', '__helpers.f');

            return builder.functionCall(forEachVarName, [
                inExpression,
                builder.functionDeclaration(null, [varName], this.body)
            ]);
        }

    }
}

module.exports = ForEach;