'use strict';

module.exports = function codeGenerator(elNode, codegen) {
    var builder = codegen.builder;

    if (elNode.hasAttribute('no-browser-rerender')) {
        let lhs = builder.memberExpression(
            builder.identifier('out'),
            builder.identifier('global'));

        lhs = builder.memberExpression(lhs, builder.identifier('noBrowserRerender'));

        let rhs = builder.literal(true);

        return builder.assignment(lhs, rhs);
    }

    return null;
};
