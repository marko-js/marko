'use strict';
var ok = require('assert').ok;
var Node = require('./Node');

class ForEach extends Node {
    constructor(def) {
        super('ForEach');
        this.varName = def.varName;
        this.target = def.target;
        this.body = this.makeContainer(def.body);
        this.separator = def.separator;
        this.statusVarName = def.statusVarName;
        this.from = def.from;
        this.to = def.to;
        this.step = def.step;

        ok(this.varName, '"varName" is required');
        ok(this.target != null || this.from != null, '"target" or "from" is required');
    }

    generateCode(generator) {
        var varName = this.varName;
        var target = this.target;
        var separator = this.separator;
        var statusVarName = this.statusVarName;

        var builder = generator.builder;

        if (this.from != null) {
            // This is a range loop
            var from = this.from;
            var to = this.to;
            var step = this.step;
            var comparison = '<=';

            if (typeof step === 'number') {
                if (step < 0) {
                    comparison = '>=';
                }

                if (step === 1) {
                    step = varName + '++';
                } else if (step  === -1) {
                    step = varName + '--';
                } else if (step > 0) {
                    step = varName + '+=' + step;
                } else if (step === 0) {
                    throw new Error('Invalid step of 0');
                } else if (step < 0) {
                    step = 0-step; // Make the step positive and switch to -=
                    step = varName + '-=' + step;
                }
            } else {
                step = varName + '+=' + step;
            }

            return builder.selfInvokingFunction([
                builder.forStatement({
                    init: [
                        builder.vars([ { id: varName, init: from }])
                    ],
                    test: varName + comparison + to,
                    update: step,
                    body: this.body
                })
            ]);
        }

        if (separator && !statusVarName) {
            statusVarName = '__loop';
        }

        if (statusVarName) {
            let forEachVarName = generator.addStaticVar('forEachWithStatusVar', '__helpers.fv');
            let body = this.body;

            if (separator) {
                body = body.items.concat([
                    builder.ifStatement('!' + statusVarName + '.isLast()', [
                        builder.textOutput(separator)
                    ])
                ]);
            }

            return builder.functionCall(forEachVarName, [
                target,
                builder.functionDeclaration(null, [varName, statusVarName], body)
            ]);
        } else {
            let forEachVarName = generator.addStaticVar('forEach', '__helpers.f');

            return builder.functionCall(forEachVarName, [
                target,
                builder.functionDeclaration(null, [varName], this.body)
            ]);
        }

    }
}

module.exports = ForEach;