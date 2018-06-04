module.exports = function(el, context) {
    const builder = context.builder;
    if (el.argument) {
        el.params = builder.parseJavaScriptParams(el.argument);
        el.params.forEach(param => el.addNestedVariable(param));
        delete el.argument;
    }
};
