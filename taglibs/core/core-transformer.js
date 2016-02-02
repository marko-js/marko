'use strict';

var createLoopNode = require('./util/createLoopNode');

var coreAttrHandlers = [
    [
        'for', function(attr, node) {
            var forArgument = attr.argument;
            if (!forArgument) {
                return false;
            }

            var loopNode = createLoopNode(forArgument, null, this.builder);

            //Surround the existing node with the newly created loop node
            // NOTE: The loop node will be one of the following:
            //       ForEach, ForRange, ForEachProp or ForStatement
            node.wrap(loopNode);
        }
    ],
    [
        'if', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }
            var ifNode = this.builder.ifStatement(ifArgument);
            //Surround the existing node with an "If" node
            node.wrap(ifNode);
        }
    ],
    [
        'unless', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }
            ifArgument = this.builder.negate(ifArgument);
            var ifNode = this.builder.ifStatement(ifArgument);
            //Surround the existing node with an "if" node
            node.wrap(ifNode);
        }
    ],
    [
        'else-if', function(attr, node) {
            var elseIfArgument = attr.argument;
            if (!elseIfArgument) {
                return false;
            }
            var elseIfNode = this.builder.elseIfStatement(elseIfArgument);
            //Surround the existing node with an "ElseIf" node
            node.wrap(elseIfNode);
        }
    ],
    [
        'else', function(attr, node) {
            var elseNode = this.builder.elseStatement();
            //Surround the existing node with an "Else" node
            node.wrap(elseNode);
        }
    ],
    [
        'body-only-if', function(attr, node, el) {
            var condition = attr.argument;
            if (!condition) {
                return false;
            }

            el.setBodyOnlyIf(condition);
        }
    ],
    [
        'marko-preserve-whitespace', function(attr, node) {
            node.setPreserveWhitespace(true);
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
    el.removeAttribute('marko-body'); // This attribute is handled at parse time. We can just remove it now

    var attributeTransfomer;
    var node = el;

    el.forEachAttribute((attr) => {
        let attrName = attr.name;
        if (!attrName) {
            if (!node.addDynamicAttributes) {
                context.addError(el, 'Node does not support the "attrs" attribute');
            } else {
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
                if (newNode) {
                    newNode.pos = node.pos;
                    node = newNode;
                }
            }
        }
    });
};