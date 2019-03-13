"use strict";

const ok = require("assert").ok;
const parseRawJavaScriptAst = require("./parseRawJavaScriptAst");
const covertRawJavaScriptAst = require("./convertRawJavaScriptAst");

function parseExpression(src, builder, isExpression) {
    ok(typeof src === "string", '"src" should be a string expression');
    const ast = isExpression
        ? parseRawJavaScriptAst`(${src})`
        : parseRawJavaScriptAst`${src}`;
    return covertRawJavaScriptAst(ast, builder) || builder.expression(src);
}

module.exports = parseExpression;
