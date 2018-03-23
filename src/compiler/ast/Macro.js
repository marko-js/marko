"use strict";

var Node = require("./Node");
var ok = require("assert").ok;

class Macro extends Node {
    constructor(def) {
        super("Macro");
        this.name = def.name;
        this.params = def.params;
        this.body = this.makeContainer(def.body);

        if (this.params == null) {
            this.params = [];
        } else {
            ok(Array.isArray(this.params), '"params" should be an array');
        }
    }

    generateCode(codegen) {
        var name = this.name;
        var params = this.params || [];
        var builder = codegen.builder;
        var macroDef = codegen.context.registerMacro(name, params);
        var functionName = macroDef.functionName;

        // Walk the body after registering the macro
        var body = codegen.generateCode(this.body);

        return builder.functionDeclaration(functionName, macroDef.params, body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Macro;
