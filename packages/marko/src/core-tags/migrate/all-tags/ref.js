module.exports = function migrate(el, context) {
  const attr = el.getAttribute("ref");
  if (!attr) {
    return;
  }

  context.deprecate(
    `The "ref" attribute is deprecated. Please use "key" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-ref-attribute`
  );

  el.setAttributeValue("key", attr.value);
  el.removeAttribute(attr.name);
};
