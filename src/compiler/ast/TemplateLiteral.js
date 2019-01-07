"use strict";

var Node = require("./Node");

class TemplateLiteral extends Node {
    constructor(def) {
        super("TemplateLiteral");
        this.quasis = def.quasis;
        this.expressions = def.expressions;
        this.nonstandard = false;
    }

    generateCode(codegen) {
        const context = codegen.context;
        const builder = context.builder;
        const parts = [];

        for (let i = 0; i <= this.quasis.length; i++) {
            const quasi = this.quasis[i];
            const expr = this.expressions[i];
            if (quasi || (i === 0 && !this.nonstandard && !this.quasis[1])) {
                parts.push(builder.literal(quasi));
            }
            if (expr) {
                parts.push(codegen.generateCode(expr));
            }
        }

        if (parts.length === 1) return parts[0];

        let expression = builder.binaryExpression(parts[0], "+", parts[1]);

        for (let i = 2; i < parts.length; i++) {
            expression = builder.binaryExpression(expression, "+", parts[i]);
        }

        return expression;
    }

    writeCode(writer) {
        let code = "";
        let quote = this.nonstandard ? '"' : "`";
        for (let i = 0; i <= this.quasis.length; i++) {
            const quasi = this.quasis[i];
            const expr = this.expressions[i];
            if (quasi) code += escapeQuasi(quasi, quote);
            if (expr) code += "${" + expr.toString() + "}";
        }
        writer.write(quote + code + quote);
        writer.write("\n");
    }
}

function escapeQuasi(quasi, quote) {
    if (!quasi) return "";
    return quasi.replace(/["`\\\n\r\u2028\u2029]|\${/g, match => {
        switch (match) {
            case quote:
            case "${":
            case "\\":
                return "\\" + match;
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\u2028":
                return "\\u2028";
            case "\u2029":
                return "\\u2029";
            default:
                return match;
        }
    });
}

module.exports = TemplateLiteral;
