module.exports = function migrate(el, context) {
    const attr = el.getAttribute("w-id");
    if (!attr) {
        return;
    }

    context.deprecate(
        `The "w-id" attribute is deprecated. Please use "key" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
    );

    el.setAttributeValue("key", attr.value);
    const isHTML = el.tagDef && el.tagDef.html;
    const isDynamic = /^\$\{.+\}$/.test(el.tagName);
    if (!el.hasAttribute("id") && (isHTML || isDynamic))
        el.setAttributeValue("id:scoped", attr.value);
    el.removeAttribute(attr.name);
};
