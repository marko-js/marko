"use strict";

var Node = require("../../Node");

class EndTag extends Node {
    constructor(def) {
        super("EndTag");
        this.tagName = def.tagName;
    }

    generateCode(codegen) {
        var tagName = this.tagName;
        var builder = codegen.builder;

        return [
            builder.htmlLiteral("</"),
            builder.html(tagName),
            builder.htmlLiteral(">")
        ];
    }
}

module.exports = EndTag;
