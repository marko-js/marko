"use strict";
var ok = require("assert").ok;

const espree = require("espree");
const espreeOptions = {
  range: true,
  sourceType: "script",
  ecmaVersion: espree.latestEcmaVersion
};

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
    jsAST = espree.parse(parseSrc, espreeOptions);
    jsAST.source = parseSrc;
  } catch (e) {
    var errorIndex = e.index;
    var errorMessage = e.message;

    if (errorIndex == null) {
      // Doesn't look like an espree parse error... just rethrow the exception
      throw e;
    }

    if (startOffset) {
      errorIndex -= startOffset;
    }

    errorMessage += ":\n\n";
    errorMessage +=
      parseSrc.slice(startOffset, endOffset) +
      "\n" +
      new Array(e.column - 1).join(" ") +
      "^";

    var wrappedError = new Error(errorMessage);
    wrappedError.index = e.index;
    wrappedError.src = src;
    wrappedError.code = "ERR_INVALID_JAVASCRIPT_EXPRESSION";
    throw wrappedError;
  }

  return jsAST;
};
