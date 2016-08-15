'use strict';
var Node = require('./Node');

class Declaration extends Node {
    constructor(def) {
        super('Declaration');
        this.declaration = def.declaration;
    }

    generateHtmlCode(codegen) {
        var builder = codegen.builder;

        return [
            builder.htmlLiteral('<?'),
            codegen.generateCode(this.declaration),
            builder.htmlLiteral('?>')
        ];
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = Declaration;