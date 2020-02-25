module.exports = function(elNode, context) {
  const builder = context.builder;
  const provider = elNode.argument;
  elNode.argument = undefined;

  if (!provider) {
    context.addError(
      'You must provide a promise argument to the "<await>" tag, eg: "<await(promise)>".'
    );
    return elNode;
  }

  elNode.setAttributeValue("_provider", builder.parseExpression(provider));
  elNode.setAttributeValue("_name", builder.literal(provider));
};
