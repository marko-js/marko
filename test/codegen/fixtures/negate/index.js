'use strict';

module.exports = function (builder) {
    return builder.negate(builder.identifier('foo'));
};