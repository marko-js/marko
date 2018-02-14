'use strict';

var Node = require('../../Node');

class StartTag extends Node {
    constructor(def) {
        super('StartTag');

        this.tagName = def.tagName;
        this.attributes = def.attributes;
        this.properties = def.properties;
        this.argument = def.argument;
        this.selfClosed = def.selfClosed;
        this.dynamicAttributes = def.dynamicAttributes;
    }

    generateCode(codegen) {
        var builder = codegen.builder;

        var tagName = this.tagName;
        var selfClosed = this.selfClosed;
        var dynamicAttributes = this.dynamicAttributes;
        var context = codegen.context;

        var nodes = [
            builder.htmlLiteral('<'),
            builder.html(tagName),
        ];

        var attributes = this.attributes;

        if (attributes) {
            var hasSpread = attributes.find(attr => attr.spread);
            if (!hasSpread) {
                for (let i=0; i<attributes.length; i++) {
                    let attr = attributes[i];
                    nodes.push(codegen.generateCode(attr));
                }
            } else {
                let explicitAttrs = null;
                let attrsExpression = null;
                let addAttrs = (expr) => {
                    if (!attrsExpression) {
                        attrsExpression = expr;
                    } else {
                        attrsExpression = builder.functionCall(context.helper('merge'), [expr, attrsExpression]);
                    }
                };

                for (let i=0; i<attributes.length; i++) {
                    let attr = attributes[i];
                    if (attr.spread) {
                        if (explicitAttrs) {
                            addAttrs(builder.objectExpression(explicitAttrs));
                        }
                        addAttrs(attr.value);
                        explicitAttrs = null;
                    } else {
                        explicitAttrs = explicitAttrs || {};
                        explicitAttrs[attr.name] = attr.value;
                    }
                }

                if (explicitAttrs) {
                    addAttrs(builder.objectExpression(explicitAttrs));
                }

                let attrsFunctionCall = builder.functionCall(context.helper('attrs'), [attrsExpression]);
                nodes.push(builder.html(attrsFunctionCall));
            }
        }

        // deprecated
        if (dynamicAttributes) {
            dynamicAttributes.forEach(function(attrsExpression) {
                let attrsFunctionCall = builder.functionCall(context.helper('attrs'), [attrsExpression]);
                nodes.push(builder.html(attrsFunctionCall));
            });
        }

        if (selfClosed) {
            nodes.push(builder.htmlLiteral('/>'));
        } else {
            nodes.push(builder.htmlLiteral('>'));
        }

        return nodes;
    }
}

module.exports = StartTag;
