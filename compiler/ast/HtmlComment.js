'use strict';

var Node = require('./Node');

class HtmlComment extends Node {
    constructor(def) {
        super('HtmlComment');
        this.comment = def.comment;
    }

    generateHtmlCode(generator) {
        var comment = this.comment;
        var literal = generator.builder.literal;

        generator.addWrite(literal('<--'));
        generator.addWrite(comment);
        generator.addWrite(literal('-->'));
    }
}

module.exports = HtmlComment;