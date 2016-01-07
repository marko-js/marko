'use strict';

var Node = require('./Node');

class Vars extends Node {
    constructor(def) {
        super('Vars');
        this.kind = def.kind || 'var';
        this.declarations = def.declarations;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var declarations = this.declarations;
        var kind = this.kind;
        var isStatement = this.statement;
        var body = this.body;
        var selfInvoking = this.isFlagSet('selfInvoking');
        var hasBody = (body && body.array && body.array.length > 0);

        if(!selfInvoking && hasBody) {
            this.setFlag('selfInvoking');
            return codegen.builder.selfInvokingFunction([ this ]);
        }

        if (!declarations || !declarations.length) {
            return;
        }

        for (let i=0; i<declarations.length; i++) {
            var declarator = declarations[i];

            if (i === 0) {
                codegen.write(kind + ' ');
            } else {
                codegen.incIndent(4);
                codegen.writeLineIndent();
            }

            codegen.generateCode(declarator);

            if (i !== 0) {
                codegen.decIndent(4);
            }

            if (i < declarations.length - 1) {
                codegen.write(',\n');
            } else {
                if (isStatement) {
                    codegen.write(';\n');
                }
            }
        }
        if(hasBody) {
            codegen.generateCode(body);
        }
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }
}

module.exports = Vars;