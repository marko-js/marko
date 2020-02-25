"use strict";
var ok = require("assert").ok;
var Node = require("./Node");

class ForRange extends Node {
  constructor(def) {
    super("ForRange");
    this.params = def.params;
    this.body = this.makeContainer(def.body);
    this.from = def.from;
    this.to = def.to;
    this.step = def.step;

    ok(this.to != null, '"to" is required');
  }

  generateCode(codegen) {
    var context = codegen.context;
    var params = this.params;
    var from = this.from;
    var to = this.to;
    var step = this.step;
    var builder = codegen.builder;

    if (step == null) {
      step = builder.literalNull();
    }

    return builder.functionCall(context.helper("forRange"), [
      from,
      to,
      step,
      builder.functionDeclaration(null, params, this.body)
    ]);
  }

  walk(walker) {
    this.params = walker.walk(this.params);
    this.body = walker.walk(this.body);
    this.from = walker.walk(this.from);
    this.to = walker.walk(this.to);
    this.step = walker.walk(this.step);
  }
}

module.exports = ForRange;
