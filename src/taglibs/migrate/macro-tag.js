module.exports = function migrator(elNode, context) {
    var builder = context.builder;
    var attributes = elNode.attributes;
    var defAttr = attributes[0];

    if (
        !attributes.length ||
        attributes.some(
            attr => attr.name === "name" && attr.value.type === "Literal"
        )
    ) {
        return;
    }

    if (!defAttr || defAttr.value !== undefined) {
        context.addError(
            elNode,
            "The <macro> tag must contain a name as its first attribute, example: <macro greeting()>"
        );
        return elNode;
    }

    context.deprecate(
        'The "<macro my-macro(input)>" syntax has been deprecated. Please use the new tag param syntax, eg: "<macro(input) name="my-macro">. See: https://github.com/marko-js/marko/wiki/Deprecation:-legacy-macro',
        elNode
    );
    elNode.argument = defAttr.argument;
    elNode.addAttribute({ name: "name", value: builder.literal(defAttr.name) });
    elNode.removeAttribute(defAttr.name);
};
