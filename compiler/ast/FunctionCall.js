'use strict';
var ok = require('assert').ok;

var Node = require('./Node');

class FunctionCall extends Node {
    constructor(def) {
        super('FunctionCall');
        this.callee = def.callee;

        ok(this.callee, '"callee" is required');

        let args = this.args = def.args;

        if (args) {
            if (!Array.isArray(args)) {
                throw new Error('Invalid args');
            }

            for (let i=0; i<args.length; i++) {
                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON(), null, 2));
                }
            }
        }
    }

    generateCode(codegen) {
        var callee = this.callee;
        var args = this.args;

        codegen.generateCode(callee);

        codegen.write('(');

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    codegen.write(', ');
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON()));
                }
                codegen.generateCode(arg);
            }
        }

        codegen.write(')');
    }

    walk(walker) {
        this.callee = walker.walk(this.callee);
        this.args = walker.walk(this.args);
    }

    toString() {
        var callee = this.callee;
        var args = this.args;

        var result = callee.toString() + '(';

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    result += ', ';
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON()));
                }
                result += arg;
            }
        }

        result += ')';
        return result;
    }
}

module.exports = FunctionCall;