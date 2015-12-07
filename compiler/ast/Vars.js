'use strict';

var Node = require('./Node');

class Vars extends Node {
    constructor(def) {
        super('Vars');
        this.kind = def.kind || 'var';
        this.declarations = def.declarations;
    }

    generateCode(generator) {
        var declarations = this.declarations;
        var kind = this.kind;
        var isStatement = this.statement;

        if (!declarations || !declarations.length) {
            return;
        }

        for (let i=0; i<declarations.length; i++) {
            var declaration = declarations[i];

            if (i === 0) {
                generator.write(kind + ' ');
            } else {
                generator.writeLineIndent();
                generator.write('    ');
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