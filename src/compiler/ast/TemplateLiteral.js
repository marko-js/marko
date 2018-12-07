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
            if (quasi || (i === 0 && !this.nonstandard)) {
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
        let escape = new RegExp(quote, "g");
        for (let i = 0; i <= this.quasis.length; i++) {
            const quasi = this.quasis[i];
            const expr = this.expressions[i];
            if (quasi) code += quasi.replace(escape, `\\${quote}`);
            if (expr) code += "${" + expr.toString() + "}";
        }
        writer.write(quote + code + quote);
        writer.write("\n");
    }
}

module.exports = TemplateLiteral;
