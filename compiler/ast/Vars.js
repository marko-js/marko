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

        if (declarations && !Array.isArray(declarations) && typeof declarations === 'object') {
            // Convert the object into an array of variables
            declarations = Object.keys(declarations).map((id) => {
                let init = declarations[id];
                return { id, init };
            });
        }

        if (!declarations || !declarations.length) {
            return;
        }

        for (let i=0; i<declarations.length; i++) {
            var declaration = declarations[i];

            if (typeof declaration === 'string' || declaration instanceof Identifier) {
                declaration = {
                    id: declaration
                };
            }

            if (i === 0) {
                generator.write(kind + ' ');
            } else {
                generator.incIndent(4);
                generator.writeLineIndent();
            }

            var varName = declaration.id || declaration.name;

            if (typeof varName !== 'string') {
                throw new Error('Invalid variable name: ' + varName);
            }

            // TODO Validate the variable name
            generator.generateCode(varName);

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
    }
}

module.exports = Vars;