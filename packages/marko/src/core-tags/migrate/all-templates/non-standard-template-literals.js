"use strict";

module.exports = function migrator(el, context) {
  let found = false;
  const builder = context.builder;
  const literals = [];
  const walker = context.createWalker({
    enter(node) {
      if (node.type === "TemplateLiteral" && node.nonstandard) {
        found = true;
        node.nonstandard = false;

        if (node.expressions.length === 1 && !node.quasis.join("")) {
          // We can safely migrate non standard template literals with a single expression and no content like "${a}".
          walker.replace(node.expressions[0]);
        } else {
          // For others we keep track of them to run an optional migration below.
          node._originalExpressions = node.expressions;
          node.expressions = node.expressions.map(expr =>
            builder.conditionalExpression(
              builder.binaryExpression(expr, "==", builder.literalNull()),
              builder.literal(""),
              expr
            )
          );
          literals.push(node);
        }
      }
    }
  });

  walker.walk(el);

  if (found) {
    context.deprecate(
      "Non standard template literals have been deprecated, please use javascript template literals instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-nonstandard-template-literals"
    );
  }

  if (literals.length) {
    context.addMigration({
      description: "Migrate template with non standard template literals",
      apply(helpers) {
        return helpers
          .prompt({
            type: "confirm",
            message:
              "Non standard template literals convert null/undefined/false to empty strings, JavaScript template literals do not. If you are relying on this it may cause issues. Would you like to attempt to migrate?",
            initial: true
          })
          .then(shouldMigrate => {
            if (shouldMigrate) {
              literals.forEach(node => {
                node.expressions = node._originalExpressions;
              });
            }
          });
      }
    });
  }
};
