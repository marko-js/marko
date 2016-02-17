'use strict';

var Node = require('./Node');

class ArrayExpression extends Node {
    constructor(def) {
        super('ArrayExpression');
        this.elements = def.elements;
    }

    generateCode(codegen) {
        var elements = this.elements;

        if (!elements || !elements.length) {
            this.write('[]');
            return;
        }

        codegen.incIndent();
        codegen.write('[\n');
        codegen.incIndent();

        elements.forEach((element, i) => {
            codegen.writeLineIndent();
            codegen.generateCode(element);

            if (i < elements.length - 1) {
                codegen.write(',\n');
            } else {
                codegen.write('\n');
            }
        });

        codegen.decIndent();
        codegen.writeLineIndent();
        codegen.write(']');
        codegen.decIndent();
    }

    walk(walker) {
        this.elements = walker.walk(this.elements);
    }

    toJSON() {
        return {
            type: 'ArrayExpression',
            elements: this.elements
        };
    }
}

module.exports = ArrayExpression;