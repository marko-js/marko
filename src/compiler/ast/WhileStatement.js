"use strict";

var Node = require("./Node");

class WhileStatement extends Node {
    constructor(def) {
        super("WhileStatement");
        this.test = def.test;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        this.test = codegen.generateCode(this.test);
        this.body = codegen.generateCode(this.body);
        return this;
    }

    writeCode(writer) {
        var test = this.test;
        var body = this.body;

        writer.write("while (");
        writer.write(test);
        writer.write(") ");

        writer.write(body);

        writer.write("\n");
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
    }
}

module.exports = WhileStatement;
