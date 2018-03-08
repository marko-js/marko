"use strict";

var TextVDOM = require("./TextVDOM");
var Literal = require("../../Literal");
var he = require("he"); // Used for dealing with HTML entities

module.exports = function(node, codegen, vdomUtil) {
    var argument = codegen.generateCode(node.argument);
    var escape = node.escape !== false;
    var isStatic = null;

    if (codegen.context.isFlagSet("SCRIPT_BODY")) {
        escape = true;
    }

    if (argument instanceof Literal) {
        var literalValue = argument.value;
        if (literalValue == null || literalValue === "") {
            // Don't add empty text nodes to the final tree
            return null;
        }

        if (escape === false) {
            escape = true;

            if (typeof literalValue === "string") {
                if (literalValue.indexOf("<") !== -1) {
                    escape = false;
                } else if (literalValue.indexOf("&") !== -1) {
                    argument = codegen.builder.literal(he.decode(literalValue));
                }
            }
        }
    }

    isStatic = isStatic == null ? vdomUtil.isStaticValue(argument) : isStatic;
    return new TextVDOM({ argument, isStatic, escape });
};
