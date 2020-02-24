"use strict";

var Node = require("../Node");
var Literal = require("../Literal");
var ok = require("assert").ok;
var compiler = require("../../");
var generateHTMLCode = require("./html/generateCode");
var generateVDOMCode = require("./vdom/generateCode");
var vdomUtil = require("../../util/vdom");

function beforeGenerateCode(event) {
    event.codegen.isInAttribute = true;
}

function afterGenerateCode(event) {
    event.codegen.isInAttribute = false;
}

class HtmlAttribute extends Node {
    constructor(def) {
        super("HtmlAttribute");

        ok(def, "Invalid attribute definition");
        this.type = "HtmlAttribute";
        this.name = def.name;
        this.value = def.value;
        this.rawValue = def.rawValue;
        this.escape = def.escape;
        this.spread = def.spread;

        if (typeof this.value === "string") {
            this.value = compiler.builder.parseExpression(this.value);
        }

        if (this.value && !(this.value instanceof Node)) {
            throw new Error('"value" should be a Node instance');
        }

        this.argument = def.argument;

        this.def = def.def; // The attribute definition loaded from the taglib (if any)

        this.on("beforeGenerateCode", beforeGenerateCode);
        this.on("afterGenerateCode", afterGenerateCode);
    }

    generateHTMLCode(codegen) {
        return generateHTMLCode(this, codegen);
    }

    generateVDOMCode(codegen) {
        return generateVDOMCode(this, codegen, vdomUtil);
    }

    isLiteralValue() {
        return this.value instanceof Literal;
    }

    isLiteralString() {
        return this.isLiteralValue() && typeof this.value.value === "string";
    }

    isLiteralBoolean() {
        return this.isLiteralValue() && typeof this.value.value === "boolean";
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }

    get literalValue() {
        if (this.isLiteralValue()) {
            return this.value.value;
        } else {
            throw new Error(
                "Attribute value is not a literal value. Actual: " +
                    JSON.stringify(this.value, null, 2)
            );
        }
    }
}

HtmlAttribute.isHtmlAttribute = function(attr) {
    return attr instanceof HtmlAttribute;
};

module.exports = HtmlAttribute;
