"use strict";
var HtmlElementVDOM = require("./HtmlElementVDOM");
var EndElementVDOM = require("./EndElementVDOM");
var vdomUtil = require("../../../util/vdom");

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

function checkPropertiesStatic(properties) {
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

module.exports = function(node, codegen) {
  var builder = codegen.builder;
  var context = codegen.context;
  var body = codegen.generateCode(node.body);
  var tagName = codegen.generateCode(node.tagNameExpression);
  var attributes = codegen.generateCode(node.getAttributes());
  var key = codegen.generateCode(node.key);
  var properties = node.getProperties();
  var isAutoKeyed = node.isAutoKeyed;
  var runtimeFlags = node.runtimeFlags;
  var nextConstId = node.nextConstId;
  var isNullable = node.isNullable;
  var tagNameVar;

  if (properties) {
    Object.keys(properties).forEach(
      key => (properties[key] = codegen.generateCode(properties[key]))
    );
  }

  var isKeyStatic = vdomUtil.isStaticValue(key);
  var isAttrsStatic = checkAttributesStatic(attributes);
  var isPropsStatic = checkPropertiesStatic(properties);
  var isStatic =
    isKeyStatic && isAttrsStatic && isPropsStatic && node.isLiteralTagName();
  var isHtmlOnly = !isNullable;

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

  if (isNullable && tagName.type !== "Identifier") {
    const tagNameIdentifier = builder.identifier(
      context._uniqueVars.addVar("tagName", tagName)
    );
    tagNameVar = builder.var(tagNameIdentifier, tagName);
    tagName = tagNameIdentifier;
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
    var endElVDOM = new EndElementVDOM();
    htmlElVDOM.body = null;
    if (isNullable) {
      htmlElVDOM = builder.ifStatement(
        tagName,
        htmlElVDOM,
        builder.elseStatement(
          builder.functionCall(
            builder.memberExpression(
              builder.identifier("out"),
              builder.identifier("bf")
            ),
            [
              builder.concat(builder.literal("f_"), node.key),
              builder.identifier("component")
            ]
          )
        )
      );
      endElVDOM = builder.ifStatement(
        tagName,
        endElVDOM,
        builder.elseStatement(
          builder.functionCall(
            builder.memberExpression(
              builder.identifier("out"),
              builder.identifier("ef")
            ),
            []
          )
        )
      );
    }
    return [tagNameVar, htmlElVDOM, body, endElVDOM];
  }
};
