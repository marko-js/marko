'use strict';

var Node = require('../../Node');

class StartTag extends Node {
    constructor(def) {
        super('StartTag');

        this.tagName = def.tagName;
        this.attributes = def.attributes;
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
            for (let i=0; i<attributes.length; i++) {
                let attr = attributes[i];
                nodes.push(codegen.generateCode(attr));
            }
        }

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