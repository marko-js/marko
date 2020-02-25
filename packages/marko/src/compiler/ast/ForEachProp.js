"use strict";
var ok = require("assert").ok;
var Node = require("./Node");

class ForEachProp extends Node {
  constructor(def) {
    super("ForEachProp");
    this.params = def.params;
    this.in = def.in;
    this.body = this.makeContainer(def.body);
    ok(this.in != null, '"in" is required');
  }

  generateCode(codegen) {
    var context = codegen.context;
    var params = this.params;
    var inExpression = this.in;
    var body = this.body;
    var builder = codegen.builder;

    return builder.functionCall(context.helper("forIn"), [
      inExpression,
      builder.functionDeclaration(null, params, body)
    ]);
  }

  walk(walker) {
    this.params = walker.walk(this.params);
    this.in = walker.walk(this.in);
    this.body = walker.walk(this.body);
  }
}

module.exports = ForEachProp;
