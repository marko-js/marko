module.exports = function nodeFactory(el, context) {
    var builder = context.builder;

    var declarations = el.attributes.map((attr) => {
        return {
            id: builder.identifier(attr.name),
            init: builder.expression(attr.value)
        };
    });

    return context.builder.vars(declarations);
};