"use strict";

var Node = require("./Node");
var isCompoundExpression = require("../util/isCompoundExpression");

function generateCodeForOperand(node, writer) {
    var wrap = isCompoundExpression(node);

    if (wrap) {
        writer.write("(");
    }

    writer.write(node);

    if (wrap) {
        writer.write(")");
    }
}

function operandToString(node) {
    var wrap = isCompoundExpression(node);

    var result = "";

    if (wrap) {
        result += "(";
    }

    result += node;

    if (wrap) {
        result += ")";
    }

    return result;
}

class LogicalExpression extends Node {
    constructor(def) {
        super("LogicalExpression");
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
    }

    generateCode(codegen) {
        this.left = codegen.generateCode(this.left);
        this.right = codegen.generateCode(this.right);
        return this;
    }

    writeCode(writer) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error("Invalid LogicalExpression: " + this);
        }

        generateCodeForOperand(left, writer);
        writer.write(" ");
        writer.write(operator);
        writer.write(" ");
        generateCodeForOperand(right, writer);
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: "LogicalExpression",
            left: this.left,
            operator: this.operator,
            right: this.right
        };
    }

    walk(walker) {
        this.left = walker.walk(this.left);
        this.right = walker.walk(this.right);
    }

    toString() {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error("Invalid LogicalExpression: " + this);
        }

        return (
            operandToString(left) +
            " " +
            operator +
            " " +
            operandToString(right)
        );
    }
}

module.exports = LogicalExpression;
