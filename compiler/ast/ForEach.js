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
        this.isArray = def.isArray;

        ok(this.varName, '"varName" is required');
        ok(this.in != null, '"in" is required');
    }

    generateCode(codegen) {
        var varName = this.varName;
        var inExpression = this.in;
        var separator = this.separator;
        var statusVarName = this.statusVarName;
        var iterator = this.iterator;
        var context = codegen.context;
        var builder = codegen.builder;
        var isArray = this.isArray;

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

            let body = this.body;

            if (separator) {
                let isNotLastTest = builder.functionCall(
                    builder.memberExpression(statusVarName, builder.identifier('isLast')),
                    []);

                isNotLastTest = builder.negate(isNotLastTest);

                body = body.items.concat([
                    builder.ifStatement(isNotLastTest, [
                        builder.text(separator, false)
                    ])
                ]);
            }

            return builder.functionCall(context.helper('forEachWithStatusVar'), [
                inExpression,
                builder.functionDeclaration(null, [varName, statusVarName], body)
            ]);
        } else {
            if (isArray) {
                context.addVar(varName.name);
                var indexVarId = context.addVar(varName.name + '__i');
                var arrayVarId = context.addVar(varName.name + '__array');
                var lengthVarId = context.addVar(varName.name + '__len');

                var init = builder.sequenceExpression([
                    builder.assignment(indexVarId, builder.literal(0)),
                    builder.assignment(arrayVarId, inExpression),
                    builder.assignment(lengthVarId, builder.binaryExpression(arrayVarId, '&&', builder.memberExpression(arrayVarId, builder.identifier('length'))))
                ]);

                var test = builder.binaryExpression(indexVarId, '<', lengthVarId);

                var update = builder.unaryExpression(indexVarId, '++');

                var loopBody = [
                        builder.assignment(varName, builder.memberExpression(arrayVarId, indexVarId, true))
                    ].concat(this.body);

                return builder.forStatement(init, test, update, loopBody);
            } else {
                return builder.functionCall(context.helper('forEach'), [
                    inExpression,
                    builder.functionDeclaration(null, [varName], this.body)
                ]);
            }
        }
    }

    walk(walker) {
        this.varName = walker.walk(this.varName);
        this.in = walker.walk(this.in);
        this.body = walker.walk(this.body);
        this.separator = walker.walk(this.separator);
        this.statusVarName = walker.walk(this.statusVarName);
        this.iterator = walker.walk(this.iterator);
    }
}

module.exports = ForEach;