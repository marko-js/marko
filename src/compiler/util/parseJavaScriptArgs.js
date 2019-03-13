"use strict";

const ok = require("assert").ok;
const parseRawJavaScriptAst = require("./parseRawJavaScriptAst");
const convertRawJavaScriptAst = require("./convertRawJavaScriptAst");

function parseJavaScriptArgs(args, builder) {
    ok(typeof args === "string", '"args" should be a string');
    ok(builder, '"builder" is required');

    const ast = parseRawJavaScriptAst`_(${args})`;

    return ast.body[0].expression.arguments.map(
        node =>
            convertRawJavaScriptAst(node, builder) ||
            builder.expression(ast.source.slice(node.range[0], node.range[1]))
    );
}

module.exports = parseJavaScriptArgs;
