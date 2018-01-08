'use strict';
const isValidJavaScriptIdentifier = require('../util/isValidJavaScriptIdentifier');
const Node = require('./Node');

class Property extends Node {
    constructor(def) {
        super('Property');
        this.key = def.key;
        this.value = def.value;
        this.computed = def.computed === true;
    }

    generateCode(codegen) {
        var key = this.key;
        var value = this.value;

        this.key = codegen.generateCode(key);
        this.value = codegen.generateCode(value);

        return this;
    }

    writeCode(writer) {
        var key = this.key;
        var value = this.value;
        var computed = this.computed === true;

        if (computed) {
            writer.write('[');
        }

        if (key.type === 'Literal' && typeof key.value === 'string' && isValidJavaScriptIdentifier(key.value)) {
            writer.write(key.value);
        } else {
            writer.write(key);
        }

        if (computed) {
            writer.write(']');
        }

        writer.write(': ');
        writer.write(value);
    }

    toJSON() {
        return {
            type: 'Property',
            key: this.key,
            value: this.value
        };
    }

    walk(walker) {
        this.key = walker.walk(this.key);
        this.value = walker.walk(this.value);
    }

    get literalKeyValue() {
        if (!this.computed && this.key) {
            if (this.key.type === 'Literal') {
                return this.key.value;
            } else if (this.key.type === 'Identifier') {
                return this.key.name;
            }
        }

        return undefined;
    }

    toString() {
        var key = this.key;
        var value = this.value;

        if (key.type === 'Literal') {
            var propName = key.value;
            if (isValidJavaScriptIdentifier(propName)) {
                key = propName;
            }
        }

        return key + ': ' + value;
    }
}

module.exports = Property;
