'use strict';
var Node = require('./Node');

class Declaration extends Node {
    constructor(def) {
        super('Declaration');
        this.declaration = def.declaration;
    }

    generateHtmlCode(codegen) {

        var builder = codegen.builder;

        codegen.addWrite(builder.literal('<?'));
        codegen.addWrite(this.declaration);
        codegen.addWrite(builder.literal('?>'));
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = Declaration;