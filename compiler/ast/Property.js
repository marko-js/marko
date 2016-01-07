'use strict';

var Node = require('./Node');

class Property extends Node {
    constructor(def) {
        super('Property');
        this.key = def.key;
        this.value = def.value;
    }

    generateCode(codegen) {
        var key = this.key;
        var value = this.value;

        codegen.generateCode(key);
        codegen.write(': ');
        codegen.generateCode(value);
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
}

module.exports = Property;