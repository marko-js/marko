'use strict';

var Node = require('./Node');

class MemberExpression extends Node {
    constructor(def) {
        super('MemberExpression');
        this.object = def.object;
        this.property = def.property;
        this.computed = def.computed;
    }

    generateCode(codegen) {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        codegen.generateCode(object);

        if (computed) {
            codegen.write('[');
            codegen.generateCode(property);
            codegen.write(']');
        } else {
            codegen.write('.');
            codegen.generateCode(property);
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

    walk(walker) {
        this.object = walker.walk(this.object);
        this.property = walker.walk(this.property);
    }

    toString() {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        var result = object.toString();

        if (computed) {
            result += '[' + property + ']';
        } else {
            result += '.' + property;
        }

        return result;
    }
}

module.exports = MemberExpression;