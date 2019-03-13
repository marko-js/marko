"use strict";

const ok = require("assert").ok;
const parseRawJavaScriptAst = require("./parseRawJavaScriptAst");
const covertRawJavaScriptAst = require("./convertRawJavaScriptAst");

function parseExpression(src, builder, isExpression) {
    ok(typeof src === "string", '"src" should be a string expression');
    return (
        covertRawJavaScriptAst(
            parseRawJavaScriptAst(src, { expression: isExpression }),
            builder
        ) || builder.expression(src)
    );
}

module.exports = parseExpression;
