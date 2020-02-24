"use strict";
module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        return;
    }

    let builder = codegen.builder;
    let pathExpression = builder.parseExpression(argument);
    if (
        pathExpression.type !== "Literal" ||
        typeof pathExpression.value !== "string"
    ) {
        codegen.addError(
            'Argument to the <include-text> tag should be a string value: <include-text("./foo.txt")/>'
        );
        return;
    }

    var path = pathExpression.value;
    return builder.text(
        builder.literal(
            '<include-text> cannot be compiled in the browser (path="' +
                path +
                '")'
        )
    );
};
