module.exports = function nodeFactory(el, context) {
    var builder = context.builder;

    var declarations = el.attributes.map((attr) => {
        var id = builder.identifier(attr.name);
        var init = attr.value;

        return {
            id: id,
            init
        };
    });

    return context.builder.vars(declarations);
};