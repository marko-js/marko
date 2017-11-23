'use strict';

module.exports = function (builder) {
    return builder.arrayExpression([builder.literal('hello'), builder.literal('world')]);
};