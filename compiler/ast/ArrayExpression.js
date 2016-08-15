'use strict';

var Node = require('./Node');

class ArrayExpression extends Node {
    constructor(def) {
        super('ArrayExpression');
        this.elements = def.elements;
    }

    generateCode(codegen) {
        this.elements = codegen.generateCode(this.elements);
        return this;
    }

    writeCode(writer) {
        var elements = this.elements;

        if (!elements || !elements.length) {
            writer.write('[]');
            return;
        }

        writer.incIndent();
        writer.write('[\n');
        writer.incIndent();

        elements.forEach((element, i) => {
            writer.writeLineIndent();
            writer.write(element);

            if (i < elements.length - 1) {
                writer.write(',\n');
            } else {
                writer.write('\n');
            }
        });

        writer.decIndent();
        writer.writeLineIndent();
        writer.write(']');
        writer.decIndent();
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

    toString() {
        var result = '[';
        var elements = this.elements;
        if (elements) {
            elements.forEach((element, i) => {
                if (i !== 0) {
                    result += ', ';
                }
                result += element.toString();
            });
        }

        return result + ']';
    }
}

module.exports = ArrayExpression;