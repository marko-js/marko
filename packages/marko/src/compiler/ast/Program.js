"use strict";
var Node = require("./Node");

class Program extends Node {
    constructor(def) {
        super("Program");
        this.body = def.body;
    }

    generateCode(codegen) {
        this.body = codegen.generateCode(this.body);
        return this;
    }

    writeCode(writer) {
        writer.writeStatements(this.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Program;
