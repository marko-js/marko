"use strict";
var HtmlElementVDOM = require("./HtmlElementVDOM");
var EndElementVDOM = require("./EndElementVDOM");

function checkAttributesStatic(attributes) {
    if (attributes) {
        for (let i = 0; i < attributes.length; i++) {
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
        for (var i = 0; i < keys.length; i++) {
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
    var key = codegen.generateCode(node.key);
    var properties = node.getProperties();
    var isAutoKeyed = node.isAutoKeyed;
    var runtimeFlags = node.runtimeFlags;
    var nextConstId = node.nextConstId;

    if (properties) {
        Object.keys(properties).forEach(
            key => (properties[key] = codegen.generateCode(properties[key]))
        );
    }

    var isKeyStatic = vdomUtil.isStaticValue(key);
    var isAttrsStatic = checkAttributesStatic(attributes);
    var isPropsStatic = checkPropertiesStatic(properties, vdomUtil);
    var isStatic =
        isKeyStatic &&
        isAttrsStatic &&
        isPropsStatic &&
        node.isLiteralTagName();
    var isHtmlOnly = true;

    if (body && body.length) {
        for (var i = 0; i < body.length; i++) {
            let child = body[i];
            if (child.type === "HtmlElementVDOM" || child.type === "TextVDOM") {
                if (child.type === "TextVDOM" && child.escape === false) {
                    isHtmlOnly = false;
                }
                if (!child.isHtmlOnly) {
                    isStatic = false;
                    isHtmlOnly = false;
                }
                if (!child.isStatic) {
                    isStatic = false;
                }
            } else {
                isHtmlOnly = false;
                isStatic = false;
            }
        }
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
        nextConstId,
        runtimeFlags,
        isAutoKeyed
    });

    if (isHtmlOnly) {
        return htmlElVDOM;
    } else {
        htmlElVDOM.body = null;
        return [htmlElVDOM].concat(body, new EndElementVDOM());
    }
};
