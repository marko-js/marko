"use strict";

var ok = require("assert").ok;

function parseJavaScriptParams(params, builder) {
    ok(typeof params === "string", '"params" should be a string');
    ok(builder, '"builder" is required');

    var parsed = builder.parseExpression("function(" + params + "){}");
    return parsed.params;
}

module.exports = parseJavaScriptParams;
