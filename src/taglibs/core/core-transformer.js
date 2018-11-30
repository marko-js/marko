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
    ],
    [
        "marko-init",
        function(attr, node, el) {
            if (el.tagName !== "script") {
                this.addError(
                    'The "marko-init" attribute should only be used on the <script> tag'
                );
                return;
            }
            this.context.deprecate(
                'The "marko-init" attribute is deprecated.  Use the static tag instead. See https://github.com/marko-js/marko/issues/547'
            );
            var bodyText = el.bodyText;
            el.noOutput = true;
            this.context.addStaticCode(bodyText);
            el.detach();
            return null;
        }
    ],
    [
        "template-helpers",
        function(attr, node, el) {
            if (el.tagName !== "script") {
                this.addError(
                    'The "template-helpers" attribute should only be used on the <script> tag'
                );
                return;
            }
            this.context.deprecate(
                'The "template-helpers" attribute is deprecated and will be removed in the next release candidate. Use the static tag instead. See https://github.com/marko-js/marko/issues/547'
            );
            var bodyText = el.bodyText;
            el.noOutput = true;
            this.context.addStaticCode(bodyText);
            el.detach();
            return null;
        }
    ],
    [
        "include",
        function(attr, node, el) {
            var context = this.context;

            if (typeof attr.argument === "string") {
                if (attr.argument) {
                    var includeNode = context.createNodeForEl(
                        "include",
                        null,
                        attr.argument
                    );
                    node.appendChild(includeNode);
                } else {
                    context.addError(
                        el,
                        'The include attribute must have an argument. For example: include("./target.marko") or include(data.renderBody)'
                    );
                }
            } else {
                return false;
            }
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
        if (!attrName && !attr.spread) {
            if (!node.addDynamicAttributes) {
                context.addError(
                    el,
                    'Node does not support the "attrs" attribute'
                );
            } else {
                context.deprecate(
                    "${attrs} is deprecated, use ...attrs instead"
                );
                node.addDynamicAttributes(attr.value);
            }
            return;
        }
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
