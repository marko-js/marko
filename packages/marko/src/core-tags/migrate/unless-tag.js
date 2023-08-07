const printJS = require("./util/printJS");

module.exports = function migrator(oldNode, context) {
  const attributes = oldNode.attributes;
  const argument = oldNode.argument;

  if (!argument) {
    context.addError(
      "Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>"
    );
    return oldNode;
  }
  if (attributes.length) {
    context.addError("Invalid <unless> tag. Attributes not allowed.");
    return oldNode;
  }

  const builder = context.builder;
  const newNode = builder.htmlElement(
    "if",
    undefined,
    [],
    printJS(builder.negate(argument), context),
    false,
    false
  );

  oldNode.moveChildrenTo(newNode);
  oldNode.replaceWith(newNode);
};
