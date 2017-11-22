'use strict';

module.exports = function (builder) {
    return builder.var(builder.identifier('foo'), builder.literal('bar'), 'let');
};