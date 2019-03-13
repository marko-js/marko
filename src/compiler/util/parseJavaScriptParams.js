"use strict";

const ok = require("assert").ok;
const parseRawJavaScriptAst = require("./parseRawJavaScriptAst");

function parseJavaScriptParams(params, builder) {
    ok(typeof params === "string", '"params" should be a string');
    ok(builder, '"builder" is required');

    const src = "(" + params + ") => {}";
    const ast = parseRawJavaScriptAst(src, {
        startOffset: 1,
        endOffset: -7
    });

    return ast.body[0].expression.params.map(node => {
        const paramSrc = src.slice(node.range[0], node.range[1]);
        return node.type === "Identifier"
            ? builder.identifier(paramSrc)
            : builder.expression(paramSrc);
    });
}

module.exports = parseJavaScriptParams;
