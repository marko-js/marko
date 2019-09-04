const findBoundParent = require("../util/findBoundParent");

module.exports = function migrate(el, context) {
    const attr = el.getAttribute("w-id");
    if (!attr) {
        return;
    }

    if (findBoundParent(el)) {
        context.deprecate(
            `The "w-id" attribute is deprecated. Please use "key" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
        );
    } else {
        context.deprecate(
            `Using "w-id" in a template without a "w-bind" is deprecated. The "w-id" attribute is also deprecated. Please use "key" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
        );
        context.setMigrationFlag("legacyWidgetAttrsWithoutBind");
    }

    el.setAttributeValue("key", attr.value);
    const isHTML = el.tagDef && el.tagDef.html;
    const isDynamic = Boolean(el.rawTagNameExpression);
    const isRepeated =
        attr.value.type === "Literal" && /\[\]$/.test(attr.value.value);
    if (!el.hasAttribute("id") && !isRepeated && (isHTML || isDynamic))
        el.setAttributeValue("id:scoped", attr.value);
    el.removeAttribute(attr.name);
};
