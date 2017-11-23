'use strict';

module.exports = function (builder) {
    return builder.concat(builder.literal('a'), builder.literal('b'));
};