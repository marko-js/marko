"use strict";

var Node = require("./Node");
var isArray = Array.isArray;
const isValidJavaScriptVarName = require("../util/isValidJavaScriptVarName");

function walkValue(value, walker) {
    if (!value) {
        return value;
    } else if (value instanceof Node) {
        return walker.walk(value);
    } else if (isArray(value)) {
        let array = value;
        for (let i = 0; i < array.length; i++) {
            let el = array[i];
            array[i] = walkValue(el, walker);
        }
        return array;
    } else if (typeof value === "object") {
        let object = value;

        let keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let oldValue = object[key];
            let newValue = walkValue(oldValue, walker);
            if (newValue !== oldValue) {
                object[key] = newValue;
            }
        }

        return object;
    } else {
        return value;
    }
}

class Literal extends Node {
    constructor(def) {
        super("Literal");
        this.value = def.value;
    }

    generateCode(codegen) {
        if (this.value != null) {
            if (isArray(this.value)) {
                for (var i = 0; i < this.value.length; i++) {
                    this.value[i] = codegen.generateCode(this.value[i]);
                }
            } else if (typeof this.value === "object") {
                if (!(this.value instanceof RegExp)) {
                    var newObject = {};
                    for (var k in this.value) {
                        if (this.value.hasOwnProperty(k)) {
                            newObject[k] = codegen.generateCode(this.value[k]);
                        }
                    }
                    this.value = newObject;
                }
            }
        }
        return this;
    }

    writeCode(writer) {
        var value = this.value;
        writer.writeLiteral(value);
    }

    toString() {
        var value = this.value;
        if (value === null) {
            return "null";
        } else if (value === undefined) {
            return "undefined";
        } else if (typeof value === "string") {
            return JSON.stringify(value);
        } else if (value === true) {
            return "true";
        } else if (value === false) {
            return "false";
        } else if (isArray(value)) {
            return "[" + value.join(", ") + "]";
        } else if (typeof value === "number") {
            return value.toString();
        } else if (value instanceof RegExp) {
            return value.toString();
        } else if (typeof value === "object") {
            let keys = Object.keys(value);
            if (keys.length === 0) {
                return "{}";
            }

            var result = "{ ";

            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                let v = value[k];

                if (i !== 0) {
                    result += ", ";
                }

                if (isValidJavaScriptVarName(k)) {
                    result += k + ": ";
                } else {
                    result += JSON.stringify(k) + ": ";
                }

                result += v;
            }

            return result + " }";
        }
    }

    walk(walker) {
        walkValue(this.value, walker);
    }
}

module.exports = Literal;
