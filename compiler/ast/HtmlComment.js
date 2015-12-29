'use strict';

var Node = require('./Node');

class HtmlComment extends Node {
    constructor(def) {
        super('HtmlComment');
        this.comment = def.comment;
    }

    generateHtmlCode(codegen) {
        var comment = this.comment;
        var literal = codegen.builder.literal;

        codegen.addWrite(literal('<--'));
        codegen.addWrite(comment);
        codegen.addWrite(literal('-->'));
    }
}

module.exports = HtmlComment;