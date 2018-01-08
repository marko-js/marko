'use strict';

module.exports = function (builder) {
    return builder.conditionalExpression(builder.identifier('isHidden'), builder.literal('hidden'), builder.literal('visible'));
};