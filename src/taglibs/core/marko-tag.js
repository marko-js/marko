"use strict";

module.exports = function codeGenerator(elNode, codegen) {
    var builder = codegen.builder;
    var context = codegen.context;

    if (elNode.hasAttribute("no-browser-rerender")) {
        context.deprecate("no-browser-rerender is deprecated");
        let lhs = builder.memberExpression(
            builder.identifier("out"),
            builder.identifier("global")
        );

        lhs = builder.memberExpression(
            lhs,
            builder.identifier("noBrowserRerender")
        );

        let rhs = builder.literal(true);

        return builder.assignment(lhs, rhs);
    }

    if (
        elNode.hasAttribute(
            "deprecated-no-create-or-input-lifecycle-for-top-level-hydrate"
        )
    ) {
        context.deprecate(
            "deprecated-no-create-or-input-lifecycle-for-top-level-hydrate is deprecated"
        );
        let lhs = builder.memberExpression(
            builder.identifier("out"),
            builder.identifier("global")
        );

        lhs = builder.memberExpression(
            lhs,
            builder.identifier("oldHydrateNoCreate")
        );

        let rhs = builder.literal(true);

        return builder.assignment(lhs, rhs);
    }

    return null;
};
