module.exports = function nodeFactory(el, context) {
    var attributes = el.attributes;
    return context.builder.vars(attributes);
};