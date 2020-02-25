"use strict";

var StartTag = require("./StartTag");
var EndTag = require("./EndTag");

module.exports = function generateCode(node, codegen) {
  var builder = codegen.builder;
  var context = codegen.context;
  var tagName = node.tagName;

  // Convert the tag name into a Node so that we generate the code correctly
  if (tagName) {
    tagName = codegen.builder.literal(tagName);
  } else {
    tagName = node.tagNameExpression;
  }

  var properties = node.getProperties();
  var attributes = node._attributes && node._attributes.all;

  var body = node.body;
  var argument = node.argument;
  var hasBody = body && body.length;
  var openTagOnly = node.openTagOnly;
  var selfClosed = node.selfClosed === true;
  var isCustomElement = node.customElement;

  if (hasBody) {
    body = codegen.generateCode(body);
  }

  if (hasBody) {
    openTagOnly = false;
    selfClosed = false;
  } else if (selfClosed) {
    openTagOnly = true;
  }

  var startTag = new StartTag({
    tagName: tagName,
    attributes: isCustomElement ? null : attributes,
    properties: properties,
    argument: argument,
    selfClosed: selfClosed,
    userKey: node.isAutoKeyed ? undefined : node.key,
    includeDataMarko:
      context.meta.legacy ||
      context.isFlagSet("legacyWidgetAttrsWithoutBind") ||
      !context.isStatefulComponent ||
      isPreserved(node)
  });

  var endTag;
  var propertiesScript = [];

  if (!openTagOnly) {
    endTag = new EndTag({
      tagName: tagName
    });
  }

  if (isCustomElement && attributes && attributes.length) {
    propertiesScript = builder.functionCall(
      codegen.context.helper("propsForPreviousNode"),
      [
        builder.objectExpression(
          attributes.map(attr =>
            builder.property(builder.identifier(attr.name), attr.value)
          )
        ),
        builder.identifier("out")
      ]
    );
  }

  if (openTagOnly) {
    return [codegen.generateCode(startTag), propertiesScript];
  } else {
    return [startTag, body, endTag, propertiesScript];
  }
};

function isPreserved(el) {
  let curNode = el;

  do {
    if (curNode._canBePreserved) {
      return true;
    }

    curNode = curNode.parentNode;
  } while (curNode);

  return false;
}
