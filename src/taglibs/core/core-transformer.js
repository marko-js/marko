"use strict";

var coreAttrHandlers = [
    [
        "body-only-if",
        function(attr, node, el) {
            var argument = attr.argument;
            if (!argument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(argument);
            } catch (e) {
                test = this.builder.literalFalse();
                this.addError(
                    "Invalid expression for body-only-if statement:\n" +
                        e.message
                );
            }

            el.setBodyOnlyIf(test);
        }
    ],
    [
        "marko-preserve-whitespace",
        function(attr, node, el) {
            el.setPreserveWhitespace(true);
        }
    ]
];

class AttributeTransformer {
    constructor(context, el) {
        this.context = context;
        this.builder = context.builder;
        this.el = el;
    }

    addError(message) {
        this.context.addError({
            node: this.el,
            message: message
        });
    }
}

coreAttrHandlers.forEach(function(attrHandler) {
    var name = attrHandler[0];
    var func = attrHandler[1];
    AttributeTransformer.prototype[name] = func;
});

var attributeTransformers = AttributeTransformer.prototype;

module.exports = function transform(el, context) {
    el.removeAttribute("marko-body"); // This attribute is handled at parse time. We can just remove it now

    var attributeTransfomer;
    var node = el;

    el.forEachAttribute(attr => {
        let attrName = attr.name;
        var attrTransformerFunc = attributeTransformers[attrName];
        if (attrTransformerFunc) {
            if (!attributeTransfomer) {
                attributeTransfomer = new AttributeTransformer(context, el);
            }
            var newNode = attributeTransfomer[attrName](attr, node, el);
            if (newNode !== false) {
                el.removeAttribute(attrName);
                if (newNode !== undefined) {
                    if (newNode) {
                        newNode.pos = node.pos;
                    }

                    node = newNode;
                }
            }
        }
    });
};
