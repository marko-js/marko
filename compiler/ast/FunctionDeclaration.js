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

    generateCode(codegen) {
        var name = this.name;
        var params = this.params;
        var body = this.body;
        var statement = this.statement;

        if (name != null) {
            ok(typeof name === 'string' || name.type === 'Identifier', 'Function name should be a string or Identifier');
        }

        if (name) {
            codegen.write('function ');
            codegen.generateCode(name);
            codegen.write('(');
        } else {
            codegen.write('function(');
        }

        if (params && params.length) {
            for (let i=0, paramsLen = params.length; i<paramsLen; i++) {
                if (i !== 0) {
                    codegen.write(', ');
                }
                var param = params[i];

                if (typeof param === 'string') {
                    codegen.write(param);
                } else {
                    if (param.type !== 'Identifier') {
                        throw new Error('Illegal param ' + JSON.stringify(param) + ' for FunctionDeclaration: ' + JSON.stringify(this));
                    }
                    codegen.generateCode(param);
                }
            }
        }

        codegen.write(') ');
        var oldInFunction = codegen.inFunction;
        codegen.inFunction = true;
        codegen.generateBlock(body);
        codegen.inFunction = oldInFunction;

        if (statement) {
            codegen.write('\n');
        }
    }

    isCompoundExpression() {
        return true;
    }

    walk(walker) {
        this.name = walker.walk(this.name);
        this.params = walker.walk(this.params);
        this.body = walker.walk(this.body);
    }
}

module.exports = FunctionDeclaration;