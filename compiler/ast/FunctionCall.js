'use strict';

var Node = require('./Node');

class FunctionCall extends Node {
    constructor(def) {
        super('FunctionCall');
        this.callee = def.callee;
        this.args = def.args;

        if (this.args && !Array.isArray(this.args)) {
            throw new Error('Invalid args');
        }
    }

    generateCode(generator) {
        var callee = this.callee;
        var args = this.args;

        generator.generateCode(callee);

        generator.write('(');

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    generator.write(', ');
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON()));
                }
                generator.generateCode(arg);
            }
        }

        generator.write(')');
    }
}

module.exports = FunctionCall;