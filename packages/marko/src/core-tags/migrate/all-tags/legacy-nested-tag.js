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
};
