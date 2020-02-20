"use strict";

var Node = require("../../Node");

class StartTag extends Node {
    constructor(def) {
        super("StartTag");

        this.tagName = def.tagName;
        this.attributes = def.attributes;
        this.properties = def.properties;
        this.argument = def.argument;
        this.selfClosed = def.selfClosed;
        this.includeDataMarko = def.includeDataMarko;
    }

    generateCode(codegen) {
        var builder = codegen.builder;

        var tagName = this.tagName;
        var selfClosed = this.selfClosed;
        var context = codegen.context;

        var nodes = [builder.htmlLiteral("<"), builder.html(tagName)];

        var attributes = this.attributes;

        if (this.includeDataMarko) {
            var properties = this.properties;
            nodes.push(
                builder.html(
                    builder.functionCall(context.helper("dataMarko"), [
                        builder.objectExpression(
                            Object.keys(properties).map(propName => {
                                return builder.property(
                                    builder.literal(propName),
                                    properties[propName]
                                );
                            })
                        )
                    ])
                )
            );
        }

        if (attributes) {
            var hasSpread = attributes.find(attr => attr.spread);
            if (!hasSpread) {
                for (let i = 0; i < attributes.length; i++) {
                    let attr = attributes[i];
                    nodes.push(codegen.generateCode(attr));
                }
            } else {
                let explicitAttrs = null;
                let attrs = [];

                for (let i = 0; i < attributes.length; i++) {
                    let attr = attributes[i];
                    if (attr.spread) {
                        let isFirstOfMany = i === 0 && attributes.length !== 1;
                        if (explicitAttrs || isFirstOfMany) {
                            attrs.push(
                                builder.objectExpression(explicitAttrs || {})
                            );
                        }
                        attrs.push(attr.value);
                        explicitAttrs = null;
                    } else {
                        explicitAttrs = explicitAttrs || {};
                        explicitAttrs[attr.name] = attr.value;
                    }
                }

                if (explicitAttrs) {
                    attrs.push(builder.objectExpression(explicitAttrs));
                }

                nodes.push(
                    builder.html(
                        builder.functionCall(
                            context.helper(
                                attrs.length === 1 ? "attrs" : "mergeAttrs"
                            ),
                            attrs
                        )
                    )
                );
            }
        }

        if (selfClosed) {
            nodes.push(builder.htmlLiteral("/>"));
        } else {
            nodes.push(builder.htmlLiteral(">"));
        }

        return nodes;
    }
}

module.exports = StartTag;
