module.exports = function codeGenerator(elNode, context) {
  const builder = context.builder;
  const dynamicTag = builder.htmlElement(undefined, elNode.attributes);
  dynamicTag.rawTagNameExpression = "macroInput";
  elNode.replaceWith(dynamicTag);
};
