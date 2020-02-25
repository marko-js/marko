module.exports = function nodeFactory(elNode, context) {
  var builder = context.builder;
  var attributes = elNode.attributes;
  var defAttr = attributes[0];

  if (
    !defAttr ||
    defAttr.name !== "name" ||
    !defAttr.value ||
    typeof defAttr.value.value !== "string"
  ) {
    context.addError(
      elNode,
      'The <macro> tag must only contain a "name" attribute, example: <macro|data| name="my-macro">'
    );
    return elNode;
  }

  var macroName = defAttr.value.value;

  if (context.isMacro(macroName)) {
    context.addError(
      elNode,
      `<macro> tag with duplicate name of "${macroName}" found.`
    );
    return elNode;
  }

  context.registerMacro(macroName);
  return builder.macro(macroName, elNode.params, elNode.body);
};
