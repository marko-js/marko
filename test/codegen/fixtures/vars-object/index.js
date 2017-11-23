'use strict';

module.exports = function (builder) {
    return builder.vars({
        'foo': builder.literal('bar'),
        'hello': builder.literal('world')
    });
};