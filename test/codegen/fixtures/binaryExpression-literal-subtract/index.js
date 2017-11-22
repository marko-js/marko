'use strict';

module.exports = function (builder) {
    return builder.binaryExpression(builder.literal(5), '-', builder.literal(1));
};