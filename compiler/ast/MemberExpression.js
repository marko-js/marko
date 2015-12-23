'use strict';

var Node = require('./Node');

class MemberExpression extends Node {
    constructor(def) {
        super('MemberExpression');
        this.object = def.object;
        this.property = def.property;
        this.computed = def.computed;
    }

    generateCode(generator) {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        generator.generateCode(object);

        if (computed) {
            generator.write('[');
            generator.generateCode(property);
            generator.write(']');
        } else {
            generator.write('.');
            generator.generateCode(property);
        }
    }

    toJSON() {
        return {
            type: 'MemberExpression',
            object: this.object,
            property: this.property,
            computed: this.computed
        };
    }
}

module.exports = MemberExpression;