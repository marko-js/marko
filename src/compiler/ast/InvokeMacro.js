"use strict";

var Node = require("./Node");

class InvokeMacro extends Node {
    constructor(def) {
        super("InvokeMacro");
        this.el = def.el;
    }

    generateCode(codegen) {
        var el = this.el;
        var name = el.tagName;
        var body = el.body;
        var builder = codegen.builder;

        if (typeof name !== "string") {
            codegen.context.addError(
                el,
                "Element node with a dynamic tag name cannot be used to invoke a macro",
                "ERR_INVOKE_MACRO"
            );
            return;
        }

        var macroDef = codegen.context.getRegisteredMacro(name);

        if (!macroDef) {
            codegen.context.addError(
                el,
                "Element node does not correspond to a macro",
                "ERR_INVOKE_MACRO"
            );
            return;
        }

        var inputObjectExpression = builder.objectExpression([]);
        var properties = inputObjectExpression.properties;
        el.forEachAttribute(attr => {
            const value = attr.value || builder.literal(true);
            properties.push(builder.property(attr.name, value));
        });

        if (body && body.length) {
            properties.push(
                builder.property("renderBody", builder.renderBodyFunction(body))
            );
        }

        return builder.functionCall(builder.identifier(macroDef.functionName), [
            builder.identifier("out"),
            inputObjectExpression
        ]);
    }

    walk(walker) {
        this.el = walker.walk(this.el);
    }
}

module.exports = InvokeMacro;
