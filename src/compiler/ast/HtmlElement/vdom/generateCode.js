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

function checkPropertiesStatic(properties, vdomUtil) {
    if (properties) {
        var keys = Object.keys(properties);
        for (var i=0; i<keys.length; i++) {
            var propName = keys[i];
            var propValue = properties[propName];
            var isStatic = vdomUtil.isStaticValue(propValue);
            if (!isStatic) {
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
    var properties = codegen.generateCode(node.getProperties());
    var dynamicAttributes = codegen.generateCode(node.dynamicAttributes);
    var key = node.key;
    var runtimeFlags = node.runtimeFlags;
    var nextConstId = node.nextConstId;

    var builder = codegen.builder;

    var isKeyStatic = vdomUtil.isStaticValue(key);
    var isAttrsStatic = checkAttributesStatic(attributes);
    var isPropsStatic = checkPropertiesStatic(properties, vdomUtil);
    var isStatic = isKeyStatic && isAttrsStatic && isPropsStatic && node.isLiteralTagName();
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
        key,
        tagName,
        attributes,
        properties,
        body,
        isStatic,
        isAttrsStatic,
        isHtmlOnly,
        dynamicAttributes,
        nextConstId,
        runtimeFlags
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
