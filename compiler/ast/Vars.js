'use strict';

var Node = require('./Node');
var Identifier = require('./Identifier');

class Vars extends Node {
    constructor(def) {
        super('Vars');
        this.kind = def.kind || 'var';
        this.declarations = def.declarations;
        this.body = this.makeContainer(def.body);
    }

    generateCode(generator) {
        var declarations = this.declarations;
        var kind = this.kind;
        var isStatement = this.statement;
        var body = this.body;
        var selfInvoking = this.isFlagSet('selfInvoking');
        var hasBody = (body && body.array && body.array.length > 0);

        if(!selfInvoking && hasBody) {
            this.setFlag('selfInvoking');
            return generator.builder.selfInvokingFunction([ this ]);
        }

        if (!declarations || !declarations.length) {
            return;
        }

        for (let i=0; i<declarations.length; i++) {
            var declaration = declarations[i];

            if (i === 0) {
                generator.write(kind + ' ');
            } else {
                generator.incIndent(4);
                generator.writeLineIndent();
            }

            var varId = declaration.id || declaration.name;

            if (!(varId instanceof Identifier) && typeof varId !== 'string') {
                throw new Error('Invalid variable name: ' + varId);
            }

            // TODO Validate the variable name
            generator.generateCode(varId);

            var initValue;
            if (declaration.hasOwnProperty('init')) {
                initValue = declaration.init;
            } else if (declaration.hasOwnProperty('value')) {
                initValue = declaration.value;
            }

            if (initValue != null) {
                generator.write(' = ');
                generator.generateCode(initValue);
            }

            if (i !== 0) {
                generator.decIndent(4);
            }

            if (i < declarations.length - 1) {
                generator.write(',\n');
            } else {
                if (isStatement) {
                    generator.write(';\n');
                }
            }
        }
        if(hasBody) {
            generator.generateCode(body);
        }
    }
}

module.exports = Vars;