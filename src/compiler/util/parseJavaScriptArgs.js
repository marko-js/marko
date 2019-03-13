"use strict";

const ok = require("assert").ok;
const parseRawJavaScriptAst = require("./parseRawJavaScriptAst");
const convertRawJavaScriptAst = require("./convertRawJavaScriptAst");

function parseJavaScriptArgs(args, builder) {
    ok(typeof args === "string", '"args" should be a string');
    ok(builder, '"builder" is required');

    const src = `_(${args})`;
    const ast = parseRawJavaScriptAst(src, {
        startOffset: 2,
        endOffset: -1
    });

    return ast.body[0].expression.arguments.map(
        node =>
            convertRawJavaScriptAst(node, builder) ||
            builder.expression(src.slice(node.range[0], node.range[1]))
    );
}

module.exports = parseJavaScriptArgs;
