"use strict";

var Node = require("./Node");

class ConditionalExpression extends Node {
    constructor(def) {
        super("ConditionalExpression");
        this.test = def.test;
        this.consequent = def.consequent;
        this.alternate = def.alternate;
    }

    generateCode(codegen) {
        this.test = codegen.generateCode(this.test);
        this.consequent = codegen.generateCode(this.consequent);
        this.alternate = codegen.generateCode(this.alternate);
        return this;
    }

    writeCode(writer) {
        var test = this.test;
        var consequent = this.consequent;
        var alternate = this.alternate;

        writer.write(test);
        writer.write(" ? ");
        writer.write(consequent);
        writer.write(" : ");
        writer.write(alternate);
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: "ConditionalExpression",
            test: this.test,
            consequent: this.consequent,
            alternate: this.alternate
        };
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.consequent = walker.walk(this.consequent);
        this.alternate = walker.walk(this.alternate);
    }

    toString() {
        var test = this.test;
        var consequent = this.consequent;
        var alternate = this.alternate;
        return test.toString() + " ? " + consequent + " : " + alternate;
    }
}

module.exports = ConditionalExpression;
