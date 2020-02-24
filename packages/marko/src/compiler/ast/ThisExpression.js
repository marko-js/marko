"use strict";

var Node = require("./Node");

class ThisExpression extends Node {
    constructor() {
        super("ThisExpression");
    }

    generateCode() {
        return this;
    }

    writeCode(writer) {
        writer.write("this");
    }

    toString() {
        return "this";
    }
}

module.exports = ThisExpression;
