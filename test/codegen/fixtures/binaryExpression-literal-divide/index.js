'use strict';

module.exports = function (builder) {
    return builder.binaryExpression(builder.literal(10), '/', builder.literal(2));
};