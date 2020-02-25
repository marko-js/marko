"use strict";
var ok = require("assert").ok;
var Node = require("./Node");

class ForEach extends Node {
  constructor(def) {
    super("ForEach");
    this.params = def.params;
    this.of = def.of;
    this.body = this.makeContainer(def.body);
    ok(this.of != null, '"of" is required');
  }

  generateCode(codegen) {
    var context = codegen.context;
    var builder = codegen.builder;

    return builder.functionCall(context.helper("forOf"), [
      this.of,
      builder.functionDeclaration(null, this.params, this.body)
    ]);
  }

  walk(walker) {
    this.params = walker.walk(this.params);
    this.of = walker.walk(this.of);
    this.body = walker.walk(this.body);
  }
}

module.exports = ForEach;
