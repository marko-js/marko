const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
  const builder = context.builder;
  commonTagMigrator(elNode, context);
  elNode.setTransformerApplied(commonTagMigrator);

  context.deprecate(
    `The "<async-fragments>" tag is deprecated. Please use "<await-reorderer>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-async-fragment`
  );

  // all this tag ever did was handling of client reordering
  // we'll remove the attribute as that's all this new tag does
  elNode.removeAttribute("client-reorder");
  elNode.tagName = "await-reorderer";
  elNode.tagNameExpression = builder.literal(elNode.tagName);
};
