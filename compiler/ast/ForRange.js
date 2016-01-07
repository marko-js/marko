'use strict';
var ok = require('assert').ok;
var Node = require('./Node');
var Literal = require('./Literal');
var Identifier = require('./Identifier');

class ForRange extends Node {
    constructor(def) {
        super('ForRange');
        this.varName = def.varName;
        this.body = this.makeContainer(def.body);
        this.from = def.from;
        this.to = def.to;
        this.step = def.step;

        ok(this.varName, '"varName" is required');
        ok(this.from != null, '"from" is required');
    }

    generateCode(codegen) {
        var varName = this.varName;
        var from = this.from;
        var to = this.to;
        var step = this.step;

        var builder = codegen.builder;

        var comparison = '<=';

        if (varName instanceof Identifier) {
            varName = varName.name;
        }

        var updateExpression;

        if (step == null) {
            let fromLiteral = (from instanceof Literal) && from.value;
            let toLiteral = (to instanceof Literal) && to.value;

            if (typeof fromLiteral === 'number' && typeof toLiteral === 'number') {
                if (fromLiteral > toLiteral) {
                    updateExpression = varName + '--';
                    comparison = '>=';
                } else {
                    updateExpression = varName + '++';
                }
            }
        } else {
            let stepLiteral;

            if (step instanceof Literal) {
                stepLiteral = step.value;
            } else if (typeof step === 'number') {
                stepLiteral = step;
            }

            if (typeof stepLiteral === 'number') {
                if (stepLiteral < 0) {
                    comparison = '>=';
                }

                if (stepLiteral === 1) {
                    updateExpression = varName + '++';
                } else if (stepLiteral  === -1) {
                    updateExpression = varName + '--';
                } else if (stepLiteral > 0) {
                    updateExpression = varName + ' += ' + stepLiteral;
                } else if (stepLiteral === 0) {
                    throw new Error('Invalid step of 0');
                } else if (stepLiteral < 0) {
                    stepLiteral = 0-stepLiteral; // Make the step positive and switch to -=
                    updateExpression = varName + ' -= ' + stepLiteral;
                }
            } else {
                updateExpression = builder.assignment(varName, step, '+=');
            }
        }

        if (updateExpression == null) {
            updateExpression = varName + '++';
        }

        return builder.selfInvokingFunction([
            builder.forStatement({
                init: [
                    builder.vars([ { id: varName, init: from }])
                ],
                test: builder.binaryExpression(varName, comparison, to),
                update: updateExpression,
                body: this.body
            })
        ]);
    }

    walk(walker) {
        this.varName = walker.walk(this.varName);
        this.body = walker.walk(this.body);
        this.from = walker.walk(this.from);
        this.to = walker.walk(this.to);
        this.step = walker.walk(this.step);
    }
}

module.exports = ForRange;