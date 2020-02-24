"use strict";

var Node = require("./Node");
var isCompoundExpression = require("../util/isCompoundExpression");

class NewExpression extends Node {
    constructor(def) {
        super("NewExpression");
        this.callee = def.callee;
        this.args = def.args;
    }

    generateCode(codegen) {
        this.callee = codegen.generateCode(this.callee);
        this.args = codegen.generateCode(this.args);
        return this;
    }

    writeCode(writer) {
        var callee = this.callee;
        var args = this.args;

        writer.write("new ");

        var wrap = isCompoundExpression(callee);

        if (wrap) {
            writer.write("(");
        }

        writer.write(callee);

        if (wrap) {
            writer.write(")");
        }

        writer.write("(");

        if (args && args.length) {
            for (let i = 0, argsLen = args.length; i < argsLen; i++) {
                if (i !== 0) {
                    writer.write(", ");
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error(
                        "Arg " +
                            i +
                            " is not valid for new expression: " +
                            JSON.stringify(this.toJSON())
                    );
                }
                writer.write(arg);
            }
        }

        writer.write(")");
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: "NewExpression",
            callee: this.callee,
            args: this.args
        };
    }

    walk(walker) {
        this.callee = walker.walk(this.callee);
        this.args = walker.walk(this.args);
    }

    toString() {
        var callee = this.callee;
        var args = this.args;

        let result = "new ";

        var wrap = isCompoundExpression(callee);

        if (wrap) {
            result += "(";
        }

        result += callee;

        if (wrap) {
            result += ")";
        }

        result += "(";

        if (args && args.length) {
            for (let i = 0, argsLen = args.length; i < argsLen; i++) {
                if (i !== 0) {
                    result += ", ";
                }

                let arg = args[i];
                result += arg;
            }
        }

        result += ")";

        return result;
    }
}

module.exports = NewExpression;
