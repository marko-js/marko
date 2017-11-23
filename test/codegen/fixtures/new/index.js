'use strict';

module.exports = function (builder) {
    return builder.newExpression(builder.identifier('Foo'), [builder.literal('Frank'), builder.literal('human')]);
};