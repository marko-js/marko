"use strict";
var ok = require("assert").ok;
var Node = require("./Node");
var Literal = require("./Literal");
var Identifier = require("./Identifier");

class ForRange extends Node {
    constructor(def) {
        super("ForRange");
        this.varName = def.varName;
        this.body = this.makeContainer(def.body);
        this.from = def.from;
        this.to = def.to;
        this.step = def.step;

        ok(this.varName, '"varName" is required');
        ok(this.from != null, '"from" is required');
    }

    generateCode(codegen) {
        var context = codegen.context;

        var varName = this.varName;
        var from = this.from;
        var to = this.to;
        var step = this.step;

        var builder = codegen.builder;

        if (varName instanceof Identifier) {
            varName = varName.name;
        }

        if (step == null) {
            let fromLiteral = from instanceof Literal && from.value;
            let toLiteral = to instanceof Literal && to.value;

            if (
                typeof fromLiteral === "number" &&
                typeof toLiteral === "number"
            ) {
                if (fromLiteral > toLiteral) {
                    step = builder.literal(-1);
                } else {
                    step = builder.literal(1);
                }
            }
        }

        if (step == null) {
            step = builder.literalNull();
        }

        return builder.functionCall(context.helper("forRange"), [
            from,
            to,
            step,
            builder.functionDeclaration(null, [varName], this.body)
        ]);
    }

    walk(walker) {
        this.varName = walker.walk(this.varName);
        this.body = walker.walk(this.body);
        this.from = walker.walk(this.from);
        this.to = walker.walk(this.to);
        this.step = walker.walk(this.step);
    }
}

module.exports = ForRange;
