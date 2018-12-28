module.exports = function migrate(el, context) {
    const attr = el.getAttribute("w-id");
    if (!attr) {
        return;
    }

    context.deprecate(
        `The "w-id" attribute is deprecated. Please use "key" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
    );

    el.setAttributeValue("key", attr.value);
    if (!el.hasAttribute("id")) el.setAttributeValue("id:scoped", attr.value);
    el.removeAttribute(attr.name);
};
