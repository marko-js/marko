const replacePlaceholderEscapeFuncs = require("../../compiler/util/replacePlaceholderEscapeFuncs");
const printJS = require("./util/printJS");

module.exports = function codeGenerator(elNode, context) {
    const attributes = elNode.attributes;
    const builder = context.builder;

    context.deprecate(
        'The "<assign>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!attributes) {
        context.addError(
            "Invalid <assign> tag. Argument is missing. Example; <assign x=123 />"
        );
        return elNode;
    }

    elNode.replaceWith(
        builder.scriptlet({
            value: printJS(
                replacePlaceholderEscapeFuncs(
                    builder.parseExpression(
                        elNode.attributes
                            .map(
                                attr =>
                                    attr.value == null
                                        ? attr.name
                                        : `${attr.name} = ${attr.rawValue}`
                            )
                            .join(", ")
                    ),
                    context
                ),
                context
            )
        })
    );
};
