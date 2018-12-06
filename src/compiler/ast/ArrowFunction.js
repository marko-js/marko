"use strict";

var Node = require("./Node");

class ArrowFunction extends Node {
    constructor(def) {
        super("ArrowFunction");
        this.params = def.params;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var oldInFunction = codegen.inFunction;
        codegen.inFunction = true;
        this.body = codegen.generateCode(this.body);
        codegen.inFunction = oldInFunction;
        return this;
    }

    writeCode(writer) {
        var params = this.params;
        var body = this.body;
        var statement = this.statement;

        writer.write("(");

        if (params && params.length) {
            for (let i = 0, paramsLen = params.length; i < paramsLen; i++) {
                if (i !== 0) {
                    writer.write(", ");
                }

                writer.write(params[i]);
            }
        }

        writer.write(") => ");

        writer.writeBlock(body);

        if (statement) {
            writer.write("\n");
        }
    }

    isCompoundExpression() {
        return true;
    }

    walk(walker) {
        this.params = walker.walk(this.params);
        this.body = walker.walk(this.body);
    }
}

module.exports = ArrowFunction;
