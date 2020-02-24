"use strict";

var Node = require("./Node");

class Else extends Node {
    constructor(def) {
        super("Else");
        this.body = this.makeContainer(def.body);
        this.matched = false;
    }

    generateCode(codegen) {
        if (!this.matched) {
            codegen.addError("Unmatched else statement");
            return;
        }

        this.body = codegen.generateCode(this.body);
        return this;
    }

    writeCode(writer) {
        var body = this.body;
        writer.writeBlock(body);
        writer.write("\n");
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Else;
