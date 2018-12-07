module.exports = function migrate(el, context) {
    const builder = context.builder;
    el.forEachAttribute(attr => {
        const name = attr.name;
        if (!name.startsWith("w-on")) {
            return;
        }

        attr.name = name.substring("w-".length);
        attr.argument = attr.value.toString();
        attr.value = null;
    });
    builder.htmlElement(el.tagName, el.attributes, [], undefined, false, false);
};
