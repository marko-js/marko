"use strict";

var ok = require("assert").ok;

function parseJavaScriptArgs(args, builder) {
    ok(typeof args === "string", '"args" should be a string');
    ok(builder, '"builder" is required');

    var parsed = builder.parseExpression("[" + args + "]");
    return parsed.elements;
}

module.exports = parseJavaScriptArgs;
