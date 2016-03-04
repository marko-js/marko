'use strict';
var Node = require('./Node');

class DocumentType extends Node {
    constructor(def) {
        super('DocumentType');
        this.documentType = def.documentType;
    }

    generateHtmlCode(codegen) {

        var builder = codegen.builder;

        codegen.addWrite(builder.literal('<!'));
        codegen.addWrite(this.documentType);
        codegen.addWrite(builder.literal('>'));
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = DocumentType;