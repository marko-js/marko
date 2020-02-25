module.exports = function addIdScopedAttr(context, el, attrValue) {
  const templateRoot = context.root;
  const walker = context.createWalker({
    enter(node) {
      if (node.hasAttribute) {
        if (
          (node.hasAttribute("key") &&
            node.getAttributeValue("key").value == attrValue.value) ||
          (node.hasAttribute("ref") &&
            node.getAttributeValue("ref").value == attrValue.value)
        ) {
          node.setAttributeValue("id:scoped", attrValue);
          context.deprecate(
            `Relying on the "key" attribute to output an "id" is deprecated. Please use "id:scoped" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
          );
        }
      }
    }
  });
  walker.walk(templateRoot);
};
