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

        if (!declarations || !declarations.length) {
            return null;
        }

        this.declarations = codegen.generateCode(this.declarations);

        if (this.body && this.body.length) {
            var scopedBody = [this].concat(this.body);
            this.body = null;
            return codegen.builder.selfInvokingFunction(scopedBody);
        }

        return this;
    }

    writeCode(writer) {
        var declarations = this.declarations;
        var kind = this.kind;
        var isStatement = this.statement;


        if (!declarations || !declarations.length) {
            return;
        }

        writer.incIndent(4);

        for (let i=0; i<declarations.length; i++) {
            var declarator = declarations[i];

            if (i === 0) {
                writer.write(kind + ' ');
            } else {
                writer.writeLineIndent();
            }

            writer.write(declarator);

            if (i < declarations.length - 1) {
                writer.write(',\n');
            } else {
                if (isStatement) {
                    writer.write(';\n');
                }
            }
        }

        writer.decIndent(4);
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