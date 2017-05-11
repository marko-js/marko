'use strict';
var Node = require('./Node');

class DocumentType extends Node {
    constructor(def) {
        super('DocumentType');
        this.documentType = def.documentType;
    }

    generateHTMLCode(codegen) {
        var builder = codegen.builder;

        return [
            builder.htmlLiteral('<!'),
            builder.html(codegen.generateCode(this.documentType)),
            builder.htmlLiteral('>')
        ];
    }

    generateVDOMCode(codegen) {
        return null;
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = DocumentType;