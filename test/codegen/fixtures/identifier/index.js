'use strict';

module.exports = function (builder) {
    return builder.assignment(builder.identifier('foo'), builder.literal('abc'));
};