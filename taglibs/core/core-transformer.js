'use strict';

var createLoopNode = require('./util/createLoopNode');

var coreAttrHandlers = [
    [
        'for', function(attr, node) {
            var forArgument = attr.argument;
            if (!forArgument) {
                return;
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
                return;
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
                return;
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
                return;
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
            throw new Error('body-only-if Not Implemented');
            // var condition = attr.argument;
            // if (!condition) {
            //     this.addError('Invalid "body-only-if" attribute');
            //     return;
            // }
            //
            // if (el.nodeType !== '')
            //
            // el.setStripExpression(attr);
        }
    ],
    [
        'attrs', function(attr, node) {
            if (!node.addDynamicAttributes) {
                node.addError('Node does not support the "attrs" attribute');
            } else {
                node.addDynamicAttributes(attr.value);
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

    transformNode(el) {
        var node = el;
        for (var i=0, len=coreAttrHandlers.length; i<len; i++) {
            var attrHandler = coreAttrHandlers[i];
            var name = attrHandler[0];
            var attr = node.getAttribute(name);
            if (attr != null) {
                node.removeAttribute(name);
                var newNode = this[name](attr, node, el);
                if (newNode) {
                    newNode.pos = node.pos;
                    node = newNode;
                }
            }
        }

        return node;
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
    var attributeTransfomer;

    el.forEachAttribute((attr) => {
        let attrName = attr.name;
        var attrTransformerFunc = attributeTransformers[attrName];
        if (attrTransformerFunc) {
            el.removeAttribute(attrName);

            if (!attributeTransfomer) {
                attributeTransfomer = new AttributeTransformer(context, el);
            }
            attributeTransfomer[attrName](attr, el);
        }
    });
};