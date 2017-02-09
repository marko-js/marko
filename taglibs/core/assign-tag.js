module.exports = function codeGenerator(elNode, codegen) {
    var context = codegen.context;
    context.deprecate('The "<assign>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags');

    var attributes = elNode.attributes;

    if (!attributes) {
        codegen.addError('Invalid <assign> tag. Argument is missing. Example; <assign x=123 />');
        return elNode;
    }

    var builder = codegen.builder;

    return attributes.map((attr) => {
        if (attr.value == null) {
            return builder.parseExpression(attr.name);
        } else {
            return builder.assignment(attr.name, attr.value);
        }
    });
};
