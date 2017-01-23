'use strict';
var HtmlElementVDOM = require('./HtmlElementVDOM');
var EndElementVDOM = require('./EndElementVDOM');

function checkAttributesStatic(attributes) {
    if (attributes) {
        for (let i=0; i<attributes.length; i++) {
            let attr = attributes[i];

            if (!attr.isStatic) {
                return false;
            }
        }
    }

    return true;
}

module.exports = function(node, codegen, vdomUtil) {
    var body = codegen.generateCode(node.body);
    var tagName = codegen.generateCode(node.tagNameExpression);
    var attributes = codegen.generateCode(node.getAttributes());
    var dynamicAttributes = codegen.generateCode(node.dynamicAttributes);
    var builder = codegen.builder;

    var isAttrsStatic = checkAttributesStatic(attributes);
    var isStatic = isAttrsStatic && node.isLiteralTagName();
    var isHtmlOnly = true;

    if (body && body.length) {
        for (var i=0; i<body.length; i++) {
            let child = body[i];
            if (child.type === 'HtmlElementVDOM' || child.type === 'TextVDOM') {
                if (child.type === 'TextVDOM' && child.escape === false) {
                    isHtmlOnly = false;
                }
                if (!child.isHtmlOnly) {
                    isStatic = false;
                    isHtmlOnly = false;
                } if (!child.isStatic) {
                    isStatic = false;
                }
            } else {
                isHtmlOnly = false;
                isStatic = false;
            }
        }
    }

    var bodyOnlyIf = node.bodyOnlyIf;
    if (bodyOnlyIf) {
        isHtmlOnly = false;
    }

    var htmlElVDOM = new HtmlElementVDOM({
        tagName,
        attributes,
        body,
        isStatic,
        isAttrsStatic,
        isHtmlOnly,
        dynamicAttributes
    });


    if (bodyOnlyIf) {
        htmlElVDOM.body = null;

        var startIf = builder.ifStatement(builder.negate(bodyOnlyIf), [
            htmlElVDOM
        ]);

        var endIf = builder.ifStatement(builder.negate(bodyOnlyIf), [
            new EndElementVDOM()
        ]);

        return [
            startIf,
            body,
            endIf
        ];
    } else if (isHtmlOnly) {
        return htmlElVDOM;
    } else {
        htmlElVDOM.body = null;
        return [htmlElVDOM].concat(body, new EndElementVDOM());
    }
};
