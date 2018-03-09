"use strict";

var Node = require("./Node");

class ForStatement extends Node {
    constructor(def) {
        super("ForStatement");
        this.init = def.init;
        this.test = def.test;
        this.update = def.update;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        this.init = codegen.generateCode(this.init);
        this.test = codegen.generateCode(this.test);
        this.update = codegen.generateCode(this.update);
        this.body = codegen.generateCode(this.body);
        return this;
    }

    writeCode(writer) {
        var init = this.init;
        var test = this.test;
        var update = this.update;
        var body = this.body;

        writer.write("for (");

        if (init) {
            writer.write(init);
        }

        writer.write("; ");

        if (test) {
            writer.write(test);
        }

        writer.write("; ");

        if (update) {
            writer.write(update);
        }

        writer.write(") ");

        writer.writeBlock(body);

        writer.write("\n");
    }

    walk(walker) {
        this.init = walker.walk(this.init);
        this.test = walker.walk(this.test);
        this.update = walker.walk(this.update);
        this.body = walker.walk(this.body);
    }
}

module.exports = ForStatement;
