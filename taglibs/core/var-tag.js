module.exports = function nodeFactory(el, compiler) {
    var attributes = el.attributes;
    return compiler.builder.vars(attributes);
};