"use strict";

var Node = require("./Node");
var Literal = require("./Literal");
var isCompoundExpression = require("../util/isCompoundExpression");

class Html extends Node {
    constructor(def) {
        super("Html");
        this.argument = def.argument;
    }

    _append(appendArgument) {
        var argument = this.argument;

        if (Array.isArray(argument)) {
            var len = argument.length;
            var last = argument[len - 1];

            if (last instanceof Literal && appendArgument instanceof Literal) {
                last.value += appendArgument.value;
            } else {
                this.argument.push(appendArgument);
            }
        } else {
            if (
                argument instanceof Literal &&
                appendArgument instanceof Literal
            ) {
                argument.value += appendArgument.value;
            } else {
                this.argument = [this.argument, appendArgument];
            }
        }
    }

    append(html) {
        var appendArgument = html.argument;
        if (!appendArgument) {
            return;
        }

        if (Array.isArray(appendArgument)) {
            appendArgument.forEach(this._append, this);
        } else {
            this._append(appendArgument);
        }
    }

    generateHTMLCode() {
        return this;
    }

    writeCode(writer) {
        var argument = this.argument;

        if (Array.isArray(argument)) {
            let args = argument;

            for (let i = 0, len = args.length; i < len; i++) {
                let arg = args[i];

                if (i === 0) {
                    writer.write("out.w(");
                } else {
                    writer.write(" +\n");
                    writer.writeLineIndent();
                    writer.writeIndent();
                }

                if (isCompoundExpression(arg)) {
                    writer.write(["(", arg, ")"]);
                } else {
                    writer.write(arg);
                }
            }

            writer.write(")");
        } else {
            writer.write("out.w(");
            writer.write(argument);
            writer.write(")");
        }
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }
}

module.exports = Html;
