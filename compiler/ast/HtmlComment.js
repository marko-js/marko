'use strict';

var Node = require('./Node');

class HtmlComment extends Node {
    constructor(def) {
        super('HtmlComment');
        this.comment = def.comment;
    }

    generateHTMLCode(codegen) {
        var comment = this.comment;
        var builder = codegen.builder;

        return [
            builder.htmlLiteral('<!--'),
            builder.html(comment),
            builder.htmlLiteral('-->')
        ];
    }

    walk(walker) {
        this.comment = walker.walk(this.comment);
    }
}

module.exports = HtmlComment;