'use strict';

module.exports = function (builder) {
    return builder.binaryExpression(builder.literal(2), '*', builder.literal(5));
};