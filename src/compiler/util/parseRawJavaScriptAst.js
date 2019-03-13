"use strict";
var ok = require("assert").ok;

const esprima = require("esprima");

module.exports = function parseRawJavaScriptAst(src, opts) {
    ok(typeof src === "string", '"src" should be a string expression');

    let startOffset = 0;
    let endOffset = undefined;
    let parseSrc = src;

    if (opts) {
        if (opts.startOffset) {
            startOffset = opts.startOffset || 0;
        }

        if (opts.endOffset) {
            endOffset = opts.endOffset;
        }

        if (opts.expression) {
            startOffset = (startOffset || 0) + 1;
            endOffset = (endOffset || 0) - 1;
            parseSrc = `(${src})`;
        }
    }

    let jsAST;
    try {
        jsAST = esprima.parseScript(parseSrc, { range: true });
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
            parseSrc.slice(startOffset, endOffset || undefined) +
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
