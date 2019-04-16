module.exports = function migrate(el, context) {
    const attr = el.getAttribute("w-preserve-attrs");
    if (!attr) {
        return;
    }

    const values = attr.value.value;
    context.deprecate(
        `The "w-preserve-attrs" attribute is deprecated. Please use ":no-update" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
    );

    values.split(",").forEach(val => {
        const existingAttr = el.getAttribute(val);

        if (existingAttr) {
            existingAttr.name += ":no-update";
        } else {
            el.setAttributeValue(
                `${val}:no-update`,
                context.builder.literalNull()
            );
        }
    });

    el.removeAttribute(attr.name);
};
