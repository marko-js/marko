module.exports = function codeGenerator(elNode, context) {
    const attributes = elNode.attributes;
    const builder = context.builder;
    let newNode = null;

    context.deprecate(
        'The "<assign>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!attributes) {
        context.addError(
            "Invalid <assign> tag. Argument is missing. Example; <assign x=123 />"
        );
        return elNode;
    }

    attributes.map(attr => {
        if (attr.value == null) {
            newNode = builder.scriptlet({
                value: attr.name
            });
        } else {
            newNode = builder.scriptlet({
                value: attr.name + "=" + attr.rawValue
            });
        }

        elNode.insertSiblingBefore(newNode);
    });

    elNode.detach();
};
