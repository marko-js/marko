const legacyNestedTagSyntax = /^.*:(.*)$/;
module.exports = function migrate(el, context) {
  if (el.rawTagNameExpression) {
    return;
  }

  const match = el.tagName && el.tagName.match(legacyNestedTagSyntax);

  if (!match || !match[1]) {
    return;
  }

  const nestedTagName = match[1];
  el.tagName = `@${nestedTagName}`;

  context.deprecate(
    'The "<my-tag:nested>" tagName syntax is deprecated. Please use the "<@nested>" tagName syntax instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-legacy-nested-tags',
    el
  );
};
