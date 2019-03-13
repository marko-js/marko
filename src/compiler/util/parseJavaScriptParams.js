"use strict";

const ok = require("assert").ok;
const parseRawJavaScriptAst = require("./parseRawJavaScriptAst");

function parseJavaScriptParams(params, builder) {
    ok(typeof params === "string", '"params" should be a string');
    ok(builder, '"builder" is required');

    const ast = parseRawJavaScriptAst`(${params}) => {}`;

    return ast.body[0].expression.params.map(node => {
        const paramSrc = ast.source.slice(node.range[0], node.range[1]);
        return node.type === "Identifier"
            ? builder.identifier(paramSrc)
            : builder.expression(paramSrc);
    });
}

module.exports = parseJavaScriptParams;
