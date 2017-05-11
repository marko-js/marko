'use strict';

const Node = require('../../Node');
const vdomUtil = require('../../../util/vdom');

var FLAG_IS_SVG = 1;
var FLAG_IS_TEXTAREA = 2;
var FLAG_SIMPLE_ATTRS = 4;

function finalizeCreateArgs(createArgs, builder) {
    var length = createArgs.length;
    var lastArg;

    for (var i=length-1; i>=0; i--) {
        var arg = createArgs[i];
        if (arg) {
            lastArg = arg;
        } else {
            if (lastArg != null) {
                if (i === 3) {
                    // Use a literal 0 for the flags
                    createArgs[i] = builder.literal(0);
                } else {
                    createArgs[i] = builder.literalNull();
                }

            } else {
                length--;
            }
        }
    }

    createArgs.length = length;
    return createArgs;
}

const MAYBE_SVG = {
    'a': true,
    'script': true,
    'style': true
};

const SIMPLE_ATTRS = {
    'class': true,
    'style': true,
    'id': true
};

class HtmlElementVDOM extends Node {
    constructor(def) {
        super('HtmlElementVDOM');
        this.tagName = def.tagName;
        this.isStatic = def.isStatic;
        this.isAttrsStatic = def.isAttrsStatic;
        this.isHtmlOnly = def.isHtmlOnly;
        this.attributes = def.attributes;
        this.properties = def.properties;
        this.body = def.body;
        this.dynamicAttributes = def.dynamicAttributes;

        this.isSVG = false;
        this.isTextArea = false;
        this.hasAttributes = false;
        this.hasSimpleAttrs = false; // This will be set to true if the HTML element
                                     // only attributes in the following set:
                                     // ['id', 'style', 'class']

        this.isChild = false;
        this.createElementId = undefined;
        this.attributesArg = undefined;
        this.propertiesArg = undefined;
        this.nextConstId = undefined;
    }

    generateCode(codegen) {
        let context = codegen.context;
        let builder = codegen.builder;

        vdomUtil.registerOptimizer(context);

        let tagName = this.tagName;

        if (tagName.type === 'Literal' && typeof tagName.value === 'string') {
            let tagDef = context.getTagDef(tagName.value);
            if (tagDef) {
                if (tagDef.htmlType  === 'svg') {
                    this.isSVG = true;
                } else {
                    if (MAYBE_SVG[tagName.value] && context.isFlagSet('SVG')) {
                        this.isSVG = true;
                    } else {
                        this.tagName = tagName = builder.literal(tagName.value.toUpperCase());

                        if (tagName.value === 'TEXTAREA') {
                            this.isTextArea = true;
                        }
                    }
                }
            }
            this.isLiteralTag = true;
        } else if (context.isFlagSet('SVG')) {
            this.isSVG = true;
        }

        let attributes = this.attributes;
        let properties = this.properties;
        let dynamicAttributes = this.dynamicAttributes;

        let attributesArg = null;

        var hasNamedAttributes = false;
        var hasDynamicAttributes = dynamicAttributes != null && dynamicAttributes.length !== 0;

        var hasSimpleAttrs = true;

        if (properties && properties.noupdate) {
            // Preserving attributes requires extra logic that we cannot
            // shortcircuit
            hasSimpleAttrs = false;
        }

        if (attributes != null && attributes.length !== 0) {
            let addAttr = function(name, value) {
                hasNamedAttributes = true;

                if (!SIMPLE_ATTRS[name]) {
                    hasSimpleAttrs = false;
                }

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

        if (hasDynamicAttributes) {
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

        if (!this.isAttrsStatic && hasNamedAttributes && hasSimpleAttrs && !hasDynamicAttributes) {
            this.hasSimpleAttrs = true;
        }

        this.hasAttributes = hasNamedAttributes || hasDynamicAttributes;

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
        let tagName = this.tagName;

        let childCount = body && body.length;

        let createArgs = new Array(5); // tagName, attributes, childCount, const ID, flags

        createArgs[0] = tagName;

        if (attributesArg) {
            createArgs[1] = attributesArg;
        }

        if (childCount != null) {
            createArgs[2] = builder.literal(childCount);
        }



        var flags = 0;

        if (this.isSVG) {
            flags |= FLAG_IS_SVG;
        }

        if (this.isTextArea) {
            flags |= FLAG_IS_TEXTAREA;
        }

        if (this.hasSimpleAttrs) {
            flags |= FLAG_SIMPLE_ATTRS;
        }

        if (flags) {
            createArgs[3] = builder.literal(flags);
        }

        if (nextConstId) {
            if (!this.properties) {
                this.properties = {};
            }
            this.properties.c = nextConstId;
        }

        if (this.properties) {
            createArgs[4] = builder.literal(this.properties);
        }

        // Remove trailing undefined arguments and convert non-trailing
        // undefined elements to a literal null node
        createArgs = finalizeCreateArgs(createArgs, builder);

        let funcCall;

        if (this.isChild) {
            writer.write('.');

            funcCall = builder.functionCall(
                builder.identifier(this.isLiteralTag || this.isSVG ? 'e' : 'ed'),
                createArgs);
        } else if (this.isStatic && this.createElementId) {
            funcCall = builder.functionCall(
                this.createElementId,
                createArgs);
        } else if (this.isHtmlOnly) {
            writer.write('out.');
            funcCall = builder.functionCall(
                builder.identifier(this.isLiteralTag || this.isSVG ? 'e' : 'ed'),
                createArgs);
        } else {
            writer.write('out.');
            funcCall = builder.functionCall(
                builder.identifier(this.isLiteralTag || this.isSVG ? 'be' : 'bed'),
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
