"use strict";

var Node = require("./Node");
var adjustIndent = require("../util/adjustIndent");

class Scriptlet extends Node {
  constructor(def) {
    super("Scriptlet");
    this.code = def.code;
    this.tag = def.tag;
    this.block = def.block;
  }

  generateCode() {
    return this;
  }

  writeCode(writer) {
    var code = this.code;

    if (!code) {
      return;
    }

    if (typeof code === "string" && this.block) {
      code = adjustIndent(code, writer.currentIndent);
    }

    writer.write(code);
    writer.write("\n");
  }

  walk(walker) {
    this.code = walker.walk(this.code);
  }
}

module.exports = Scriptlet;
