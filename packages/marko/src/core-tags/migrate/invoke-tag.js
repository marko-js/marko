const renderCallToDynamicTag = require("./util/renderCallToDynamicTag");
const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
  const builder = context.builder;
  commonTagMigrator(elNode, context);
  elNode.setTransformerApplied(commonTagMigrator);
  const functionAttr = elNode.attributes[0];
  const functionArgs = functionAttr.argument;

  if (!functionAttr) {
    context.addError(
      'Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")'
    );
    return;
  }

  if (functionArgs === undefined) {
    context.addError(
      'Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")'
    );
    return;
  }

  const functionCallExpression = `${functionAttr.name}(${functionArgs})`;
  const functionAst = context.builder.parseExpression(functionCallExpression);
  let replacement = renderCallToDynamicTag(functionAst, context);

  if (replacement) {
    elNode.forEachAttribute((attr) => {
      if (attr !== functionAttr) {
        replacement.addAttribute(attr);
      }
    });
  } else {
    replacement = builder.scriptlet({
      value: functionCallExpression,
    });
  }

  elNode.replaceWith(replacement);
};
