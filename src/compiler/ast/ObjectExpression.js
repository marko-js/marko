'use strict';

var Node = require('./Node');

class ObjectExpression extends Node {
    constructor(def) {
        super('ObjectExpression');
        this.properties = def.properties;
    }

    generateCode(codegen) {
        this.properties = codegen.generateCode(this.properties);

        return this;
    }

    writeCode(writer) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            writer.write('{}');
            return;
        }

        writer.incIndent();
        writer.write('{\n');
        writer.incIndent();

        properties.forEach((prop, i) => {
            writer.writeLineIndent();
            writer.write(prop);

            if (i < properties.length - 1) {
                writer.write(',\n');
            } else {
                writer.write('\n');
            }
        });

        writer.decIndent();
        writer.writeLineIndent();
        writer.write('}');
        writer.decIndent();
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

    toString(codegen) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            return '{}';
        }

        let result = '{';

        properties.forEach((prop, i) => {
            if (i !== 0) {
                result += ', ';
            }
            result += prop;
        });

        return result + '}';    }
}

module.exports = ObjectExpression;