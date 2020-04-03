"use strict";

var attr = require("../../../../runtime/html/helpers/attr");
var escapeDoubleQuoteAttrValue = require("../../../../runtime/html/helpers/escape-quotes")
  .d;

function isStringLiteral(node) {
  return node.type === "Literal" && typeof node.value === "string";
}

function flattenAttrConcats(node) {
  function flattenHelper(node) {
    if (node.type === "BinaryExpression" && node.operator === "+") {
      let left = flattenHelper(node.left);
      let right = flattenHelper(node.right);

      var isString = left.isString || right.isString;

      if (isString) {
        return {
          isString: true,
          concats: left.concats.concat(right.concats)
        };
      } else {
        return {
          isString: false,
          concats: [node]
        };
      }
    }

    return {
      isString: isStringLiteral(node) || node.type === "AttributePlaceholder",
      concats: [node]
    };
  }

  var final = flattenHelper(node);
  return final.concats;
}

function generateCodeForExpressionAttr(name, value, codegen) {
  var flattenedConcats = flattenAttrConcats(value);

  var hasLiteral = false;
  var builder = codegen.builder;
  var finalNodes = [];
  var context = codegen.context;

  function addHtml(argument) {
    finalNodes.push(builder.html(argument));
  }

  function addHtmlLiteral(value) {
    finalNodes.push(builder.htmlLiteral(value));
  }

  for (let i = 0; i < flattenedConcats.length; i++) {
    if (
      flattenedConcats[i].type === "Literal" ||
      flattenedConcats[i].type === "AttributePlaceholder"
    ) {
      hasLiteral = true;
      break;
    }
  }

  if (hasLiteral) {
    addHtmlLiteral(" " + name + '="');
    for (let i = 0; i < flattenedConcats.length; i++) {
      var part = flattenedConcats[i];
      if (part.type === "Literal") {
        part.value = escapeDoubleQuoteAttrValue(part.value);
      } else {
        part = builder.functionCall(
          context.helper("escapeDoubleQuoteAttrValue"),
          [part]
        );
      }
      addHtml(part);
    }
    addHtmlLiteral('"');
  } else {
    if (name === "class") {
      addHtml(
        codegen.builder.functionCall(context.helper("classAttr"), [value])
      );
    } else if (name === "style") {
      addHtml(
        codegen.builder.functionCall(context.helper("styleAttr"), [value])
      );
    } else {
      let attrArgs = [codegen.builder.literal(name), value];
      addHtml(codegen.builder.functionCall(context.helper("attr"), attrArgs));
    }
  }

  return finalNodes;
}

module.exports = function generateCode(node, codegen) {
  let name = node.name;
  let value = node.value;
  let argument = node.argument;
  var builder = codegen.builder;

  if (!name) {
    return null;
  }

  if (node.isLiteralValue()) {
    let literalValue = value.value;

    if (literalValue instanceof RegExp) {
      literalValue = literalValue.source;
    }

    return builder.htmlLiteral(attr(name, literalValue));
  } else if (value != null) {
    if (value.type === "TemplateLiteral") {
      value.nonstandard = false;
    }
    return generateCodeForExpressionAttr(name, value, codegen);
  } else if (argument) {
    return [
      builder.htmlLiteral(" " + name + "("),
      builder.htmlLiteral(argument),
      builder.htmlLiteral(")")
    ];
  } else {
    // Attribute with no value is a boolean attribute
    return builder.htmlLiteral(" " + name);
  }
};
