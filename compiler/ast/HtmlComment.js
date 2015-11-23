'use strict';

var Node = require('./Node');

class HtmlComment extends Node {
    constructor(def) {
        super('HtmlComment');
        this.comment = def.comment;
    }

    generateHtmlCode(generator) {
        var comment = this.comment;
        generator.addWrite('<--');
        generator.addWrite(comment);
        generator.addWrite('-->');
    }
}

module.exports = HtmlComment;