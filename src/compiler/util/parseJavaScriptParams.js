"use strict";

var ok = require("assert").ok;
var esprima = require("esprima");

function parseJavaScriptParams(params, builder) {
    ok(typeof params === "string", '"params" should be a string');
    ok(builder, '"builder" is required');

    var src = "(" + params + ") => {}";
    var jsAST = esprima.parseScript(src, { range: true });
    var paramNodes = jsAST.body[0].expression.params;
    return paramNodes.map(node => {
        var nodeSrc = src.slice(node.range[0], node.range[1]);
        return builder.expression(nodeSrc);
    });
}

module.exports = parseJavaScriptParams;
