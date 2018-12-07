module.exports = function migrate(el) {
    el.forEachAttribute(attr => {
        const name = attr.name;
        if (!name.startsWith("w-on")) {
            return;
        }

        attr.name = name.substring("w-".length);
        attr.argument = attr.value.toString();
        attr.value = null;
    });
};
