'use strict';

module.exports = function (builder) {
    return builder.binaryExpression(builder.identifier('foo'), '/', builder.literal(2));
};