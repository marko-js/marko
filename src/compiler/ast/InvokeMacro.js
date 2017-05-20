'use strict';

var Node = require('./Node');
var ok = require('assert').ok;

function removeTrailingUndefineds(args) {
    var i;
    var last = args.length-1;

    for (i=last; i>=0; i--) {
        if (args[i].type !== 'Literal' || args[i].value !== undefined) {
            break;
        }
    }

    if (i !== last) {
        args = args.slice(0, i+1);
    }

    return args;
}


class InvokeMacro extends Node {
    constructor(def) {
        super('InvokeMacro');
        this.el = def.el;
        this.name = def.name;
        this.args = def.args;
        this.body = this.makeContainer(def.body);

        if (this.name != null) {
            ok(typeof this.name === 'string', 'Invalid macro name: ' + this.name);
        }
    }

    generateCode(codegen) {
        var el = this.el;
        var name = this.name;
        var args = this.args;
        var body = this.body;

        var builder = codegen.builder;

        var macroDef;

        if (el) {
            name = el.tagName;
            body = el.body;

            if (typeof name !== 'string') {
                codegen.context.addError(el, 'Element node with a dynamic tag name cannot be used to invoke a macro', 'ERR_INVOKE_MACRO');
                return;
            }

            macroDef = codegen.context.getRegisteredMacro(name);

            if (!macroDef) {
                codegen.context.addError(el, 'Element node does not correspond to a macro', 'ERR_INVOKE_MACRO');
                return;
            }

            if (el.argument) {
                args = builder.parseJavaScriptArgs(el.argument);
            } else {
                args = new Array(macroDef.params.length);
                for (let i=0; i<args.length; i++) {
                    args[i] = builder.literal(undefined);
                }

                el.forEachAttribute((attr) => {
                    var paramName = attr.name;
                    var paramIndex = macroDef.getParamIndex(paramName);
                    if (paramIndex == null) {
                        codegen.context.addError(el, 'The "' + name + '" macro does not have a parameter named "' + paramName + '"', 'ERR_INVOKE_MACRO');
                        return;
                    }

                    var value = attr.value;
                    if (value == null) {
                        value = builder.literal(true);
                    }
                    args[paramIndex] = value;
                });
            }
        } else {
            macroDef = codegen.context.getRegisteredMacro(name);
            if (!macroDef) {
                codegen.addError('Macro not found with name "' + name + '"', 'ERR_INVOKE_MACRO');
                return;
            }
        }

        if (!args) {
            args = [];
        }

        while (args.length < macroDef.params.length) {
            args.push(builder.literal(undefined));
        }

        if (body && body.length) {
            args[macroDef.getParamIndex('renderBody')] = builder.renderBodyFunction(body);
        }

        args[macroDef.getParamIndex('out')] = builder.identifier('out');

        args = removeTrailingUndefineds(args);

        return builder.functionCall(builder.identifier(macroDef.functionName), args);
    }

    walk(walker) {
        this.el = walker.walk(this.el);
        this.name = walker.walk(this.name);
        this.args = walker.walk(this.args);
        this.body = walker.walk(this.body);
    }
}

module.exports = InvokeMacro;