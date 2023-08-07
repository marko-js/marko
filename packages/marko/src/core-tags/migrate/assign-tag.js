const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
  const attributes = elNode.attributes;
  const builder = context.builder;
  commonTagMigrator(elNode, context);
  elNode.setTransformerApplied(commonTagMigrator);

  if (!attributes) {
    context.addError(
      "Invalid <assign> tag. Argument is missing. Example; <assign x=123 />"
    );
    return elNode;
  }

  elNode.attributes.forEach((attr) => {
    elNode.insertSiblingBefore(
      builder.scriptlet({
        value:
          attr.value == null
            ? attr.name
            : `${attr.name} = ${printJS(attr.value, context, null, true)}`,
      })
    );
  });

  elNode.detach();
};
