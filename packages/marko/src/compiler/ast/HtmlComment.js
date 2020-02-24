"use strict";

var Node = require("./Node");

class HtmlComment extends Node {
    constructor(def) {
        super("HtmlComment");
        this.comment = def.comment;
    }

    generateHTMLCode(codegen) {
        var comment = this.comment;
        var builder = codegen.builder;

        return [
            builder.htmlLiteral("<!--"),
            builder.html(comment),
            builder.htmlLiteral("-->")
        ];
    }

    generateVDOMCode(codegen) {
        var comment = this.comment;
        var builder = codegen.builder;

        if (Array.isArray(comment)) {
            comment = builder.concat(comment);
        }

        const commentArgs = [comment];

        return builder.functionCall(
            builder.memberExpression(
                builder.identifierOut(),
                builder.identifier("comment")
            ),
            commentArgs
        );
    }

    walk(walker) {
        this.comment = walker.walk(this.comment);
    }

    setPropertyValue(name, value) {
        if (!this._properties) {
            this._properties = {};
        }
        this._properties[name] = value;
    }
}

module.exports = HtmlComment;
