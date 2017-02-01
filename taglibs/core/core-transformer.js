'use strict';

var createLoopNode = require('./util/createLoopNode');

var coreAttrHandlers = [
    [
        'while', function(attr, node) {
            var whileArgument = attr.argument;
            if (!whileArgument) {
                return false;
            }

            var whileNode = this.builder.whileStatement(whileArgument);
            node.wrapWith(whileNode);
        }
    ],
    [
        'for', function(attr, node) {
            var forArgument = attr.argument;
            if (!forArgument) {
                return false;
            }

            var loopNode;

            try {
                loopNode = createLoopNode(forArgument, null, this.builder);
            } catch(e) {
                if (e.code === 'INVALID_FOR') {
                    this.addError(e.message);
                    return;
                } else {
                    throw e;
                }
            }


            //Surround the existing node with the newly created loop node
            // NOTE: The loop node will be one of the following:
            //       ForEach, ForRange, ForEachProp or ForStatement
            node.wrapWith(loopNode);
        }
    ],
    [
        'if', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(ifArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for if statement:\n' + e.message);
            }

            var ifNode = this.builder.ifStatement(test);
            //Surround the existing node with an "If" node
            node.wrapWith(ifNode);
        }
    ],
    [
        'unless', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(ifArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for unless statement:\n' + e.message);
            }

            test = this.builder.negate(test);
            var ifNode = this.builder.ifStatement(test);
            //Surround the existing node with an "if" node
            node.wrapWith(ifNode);
        }
    ],
    [
        'else-if', function(attr, node) {
            var elseIfArgument = attr.argument;
            if (!elseIfArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(elseIfArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for else-if statement:\n' + e.message);
            }

            var elseIfNode = this.builder.elseIfStatement(test);
            //Surround the existing node with an "ElseIf" node
            node.wrapWith(elseIfNode);
        }
    ],
    [
        'else', function(attr, node) {
            var elseNode = this.builder.elseStatement();
            //Surround the existing node with an "Else" node
            node.wrapWith(elseNode);
        }
    ],
    [
        'body-only-if', function(attr, node, el) {
            var argument = attr.argument;
            if (!argument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(argument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for body-only-if statement:\n' + e.message);
            }

            el.setBodyOnlyIf(test);
        }
    ],
    [
        'marko-preserve-whitespace', function(attr, node, el) {
            el.setPreserveWhitespace(true);
        }
    ],
    [
        'marko-init', function(attr, node, el) {
            if (el.tagName !== 'script') {
                this.addError('The "marko-init" attribute should only be used on the <script> tag');
                return;
            }
            this.context.deprecate('The "marko-init" attribute is deprecated.  Use the static tag instead. See https://github.com/marko-js/marko/issues/547');
            var bodyText = el.bodyText;
            el.noOutput = true;
            this.context.addStaticCode(bodyText);
            el.detach();
            return null;
        }
    ],
    [
        'template-helpers', function(attr, node, el) {
            if (el.tagName !== 'script') {
                this.addError('The "template-helpers" attribute should only be used on the <script> tag');
                return;
            }
            this.context.deprecate('The "template-helpers" attribute is deprecated and will be removed in the next release candidate. Use the static tag instead. See https://github.com/marko-js/marko/issues/547');
            var bodyText = el.bodyText;
            el.noOutput = true;
            this.context.addStaticCode(bodyText);
            el.detach();
            return null;
        }
    ],
    [
        'include', function(attr, node, el) {
            var context = this.context;

            if (typeof attr.argument === 'string') {
                if (attr.argument) {
                    var includeNode = context.createNodeForEl('include', null, attr.argument);
                    node.appendChild(includeNode);                    
                } else {
                    context.addError(el, 'The include attribute must have an argument. For example: include("./target.marko") or include(data.renderBody)');
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