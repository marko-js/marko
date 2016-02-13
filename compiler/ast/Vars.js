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

        var hasBody = this.body && this.body.length;

        if(hasBody) {

            var scopedBody = [this].concat(this.body.items);
            this.body = null;

            return codegen.builder.selfInvokingFunction(scopedBody);
        }

        if (!declarations || !declarations.length) {
            return;
        }

        codegen.incIndent(4);

        for (let i=0; i<declarations.length; i++) {
            var declarator = declarations[i];

            if (i === 0) {
                codegen.write(kind + ' ');
            } else {
                codegen.writeLineIndent();
            }

            codegen.generateCode(declarator);

            if (i < declarations.length - 1) {
                codegen.write(',\n');
            } else {
                if (isStatement) {
                    codegen.write(';\n');
                }
            }
        }

        codegen.decIndent(4);

        if (hasBody) {
            codegen.generateCode(body);
        }
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }

    /**
     * "noOutput" should be true if the Node.js does not result in any HTML or Text output
     */
    get noOutput() {
        return !(this.body && this.body.length);
    }
}

module.exports = Vars;