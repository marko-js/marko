'use strict';

var Node = require('./Node');

class ObjectExpression extends Node {
    constructor(def) {
        super('ObjectExpression');
        this.properties = def.properties;
    }

    generateCode(codegen) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            this.write('{}');
            return;
        }

        codegen.incIndent();
        codegen.write('{\n');
        codegen.incIndent();

        properties.forEach((prop, i) => {
            codegen.writeLineIndent();
            codegen.generateCode(prop);

            if (i < properties.length - 1) {
                codegen.write(',\n');
            } else {
                codegen.write('\n');
            }
        });

        codegen.decIndent();
        codegen.writeLineIndent();
        codegen.write('}');
        codegen.decIndent();
    }

    toJSON() {
        return {
            type: 'ObjectExpression',
            properties: this.properties
        };
    }

    walk(walker) {
        this.properties = walker.walk(this.properties);
    }
}

module.exports = ObjectExpression;