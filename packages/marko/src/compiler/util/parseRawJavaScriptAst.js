"use strict";
var ok = require("assert").ok;

const esprima = require("esprima");

module.exports = function parseRawJavaScriptAst(parts, src) {
    ok(
        parts.length === 2,
        "Tagged template literal should only have one interpolated value (javascript source)"
    );
    ok(typeof src === "string", '"src" should be a string expression');

    const startCode = parts[0];
    const endCode = parts[1];
    const startOffset = startCode.length;
    const endOffset = -endCode.length || undefined;
    const parseSrc = startCode + src + endCode;
    let jsAST;

    try {
        jsAST = esprima.parseScript(parseSrc, { range: true });
        jsAST.source = parseSrc;
    } catch (e) {
        var errorIndex = e.index;
        var errorMessage = "\n" + e.description;

        if (errorIndex == null) {
            // Doesn't look like an Esprima parse error... just rethrow the exception
            throw e;
        }

        if (startOffset) {
            errorIndex -= startOffset;
        }

        errorMessage += ": ";
        errorMessage +=
            parseSrc.slice(startOffset, endOffset) +
            "\n" +
            new Array(errorMessage.length + errorIndex + 1).join(" ") +
            "^";

        var wrappedError = new Error(errorMessage);
        wrappedError.index = errorIndex;
        wrappedError.src = src;
        wrappedError.code = "ERR_INVALID_JAVASCRIPT_EXPRESSION";
        throw wrappedError;
    }

    return jsAST;
};
