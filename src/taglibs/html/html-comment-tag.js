"use strict";

module.exports = function codeGenerator(elNode, codegen) {
    const builder = codegen.builder;
    const body = elNode.body.array;
    return builder.functionCall(
        builder.memberExpression(
            builder.identifier("out"),
            builder.identifier("comment")
        ),
        [
            Array.from(body.slice(1)).reduce((expr, current) => {
                return builder.binaryExpression(expr, "+", current.argument);
            }, body[0].argument)
        ]
    );
};
