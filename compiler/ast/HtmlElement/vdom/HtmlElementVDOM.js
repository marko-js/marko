'use strict';

const Node = require('../../Node');
const vdomUtil = require('../../../util/vdom');

function finalizeCreateArgs(createArgs, builder) {
    var length = createArgs.length;
    var lastArg;

    for (var i=length-1; i>=0; i--) {
        var arg = createArgs[i];
        if (arg) {
            lastArg = arg;
        } else {
            if (lastArg != null) {
                createArgs[i] = builder.literalNull();
            } else {
                length--;
            }
        }
    }

    createArgs.length = length;
    return createArgs;
}

class HtmlElementVDOM extends Node {
    constructor(def) {
        super('HtmlElementVDOM');
        this.tagName = def.tagName;
        this.isStatic = def.isStatic;
        this.isAttrsStatic = def.isAttrsStatic;
        this.isHtmlOnly = def.isHtmlOnly;
        this.attributes = def.attributes;
        this.body = def.body;
        this.dynamicAttributes = def.dynamicAttributes;

        this.isChild = false;
        this.createElementId = undefined;
        this.attributesArg = undefined;
        this.nextConstId = undefined;
    }

    generateCode(codegen) {
        let context = codegen.context;
        let builder = codegen.builder;

        vdomUtil.registerOptimizer(context);

        let attributes = this.attributes;
        let dynamicAttributes = this.dynamicAttributes;

        let attributesArg = null;

        if (attributes && attributes.length) {
            let addAttr = function(name, value) {
                if (!attributesArg) {
                    attributesArg = {};
                }

                if (value.type === 'Literal') {
                    let literalValue = value.value;
                    if (literalValue == null || literalValue === false) {
                        return;
                    } else if (typeof literalValue === 'number') {
                        value.value = literalValue.toString();
                    }
                } else if (value.type === 'AttributePlaceholder') {
                    value = codegen.builder.functionCall(context.helper('str'), [value]);
                }

                attributesArg[name] = value;
            };

            attributes.forEach((attr) => {
                let value = attr.value;

                if (value == null) {
                    value = builder.literal(true);
                }

                if (!attr.name) {
                    return;
                }

                addAttr(attr.name, value);
            });

            if (attributesArg) {
                attributesArg = builder.literal(attributesArg);
            }
        }

        if (dynamicAttributes && dynamicAttributes.length) {
            dynamicAttributes.forEach((attrs) => {
                if (attributesArg) {
                    let mergeVar = context.helper('merge');
                    attributesArg = builder.functionCall(mergeVar, [
                        attributesArg, // Input props from the attributes take precedence
                        attrs
                    ]);
                } else {
                    attributesArg = attrs;
                }
            });
        }

        this.attributesArg = attributesArg;

        return this;
    }

    walk(walker) {
        this.tagName = walker.walk(this.tagName);
        this.attributes = walker.walk(this.attributes);
        this.body = walker.walk(this.body);
    }

    writeCode(writer) {
        let builder = writer.builder;

        let body = this.body;
        let attributesArg = this.attributesArg;
        let nextConstId = this.nextConstId;

        let childCount = body && body.length;

        let createArgs = new Array(4); // tagName, attributes, childCount, const ID

        createArgs[0] = this.tagName;

        if (attributesArg) {
            createArgs[1] = attributesArg;
        }

        if (childCount != null) {
            createArgs[2] = builder.literal(childCount);
        }

        if (nextConstId) {
            createArgs[3] = nextConstId;
        }

        // Remove trailing undefined arguments and convert non-trailing
        // undefined elements to a literal null node
        createArgs = finalizeCreateArgs(createArgs, builder);

        let funcCall;

        if (this.isChild) {
            writer.write('.');

            funcCall = builder.functionCall(
                builder.identifier('e'),
                createArgs);
        } else if (this.isStatic && this.createElementId) {
            funcCall = builder.functionCall(
                this.createElementId,
                createArgs);
        } else if (this.isHtmlOnly) {
            writer.write('out.');
            funcCall = builder.functionCall(
                builder.identifier('e'),
                createArgs);
        } else {
            writer.write('out.');
            funcCall = builder.functionCall(
                builder.identifier('be'),
                createArgs);
        }

        writer.write(funcCall);

        if (body && body.length) {
            writer.incIndent();
            for(let i=0; i<body.length; i++) {
                let child = body[i];
                child.isChild = true;
                writer.write('\n');
                writer.writeLineIndent();
                writer.write(child);
            }
            writer.decIndent();
        }
    }
}

module.exports = HtmlElementVDOM;
