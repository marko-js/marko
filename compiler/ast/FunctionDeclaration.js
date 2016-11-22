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
        var oldInFunction = codegen.inFunction;
        codegen.inFunction = true;
        this.body = codegen.generateCode(this.body);
        codegen.inFunction = oldInFunction;
        return this;
    }

    writeCode(writer) {
        var name = this.name;
        var params = this.params;
        var body = this.body;
        var statement = this.statement;

        if (name != null) {
            ok(typeof name === 'string' || name.type === 'Identifier', 'Function name should be a string or Identifier');
        }

        if (name) {
            writer.write('function ');
            writer.write(name);
            writer.write('(');
        } else {
            writer.write('function(');
        }

        if (params && params.length) {
            for (let i=0, paramsLen = params.length; i<paramsLen; i++) {
                if (i !== 0) {
                    writer.write(', ');
                }
                var param = params[i];

                if (typeof param === 'string') {
                    writer.write(param);
                } else {
                    if (param.type !== 'Identifier') {
                        throw new Error('Illegal param ' + JSON.stringify(param) + ' for FunctionDeclaration: ' + JSON.stringify(this));
                    }
                    writer.write(param);
                }
            }
        }

        writer.write(') ');

        writer.writeBlock(body);

        if (statement) {
            writer.write('\n');
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