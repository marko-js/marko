'use strict';

var Node = require('./Node');
var ok = require('assert').ok;

class FunctionDeclaration extends Node {
    constructor(def) {
        super('FunctionDeclaration');
        this.name = def.name;
        this.params = def.params;
        this.body = this.makeContainer(def.body);
    }

    generateCode(generator) {
        var name = this.name;
        var params = this.params;
        var body = this.body;
        var statement = this.statement;

        if (name != null) {
            ok(typeof name === 'string', 'Function name should be a string');
        }

        generator.write('function' + (name ? ' ' + name : '') + '(');

        if (params && params.length) {
            for (let i=0, paramsLen = params.length; i<paramsLen; i++) {
                if (i !== 0) {
                    generator.write(', ');
                }
                var param = params[i];

                if (typeof param === 'string') {
                    generator.write(param);
                } else {
                    if (param.type !== 'Identifier') {
                        throw new Error('Illegal param: ' + param);
                    }
                    generator.generateCode(param);
                }
            }
        }

        generator.write(') ');
        var oldInFunction = generator.inFunction;
        generator.inFunction = true;
        generator.generateBlock(body);
        generator.inFunction = oldInFunction;

        if (statement) {
            generator.write('\n');
        }
    }
}

module.exports = FunctionDeclaration;