"use strict";

var Node = require("./Node");
var adjustIndent = require("../util/adjustIndent");

class Code extends Node {
    constructor(def) {
        super("Code");
        this.value = def.value;
    }

    generateCode() {
        return this;
    }

    writeCode(writer) {
        var code = this.value;

        if (!code) {
            return;
        }

        code = adjustIndent(code, writer.currentIndent);

        writer.write(code);
    }
}

module.exports = Code;
