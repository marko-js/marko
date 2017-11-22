'use strict';

module.exports = function (builder) {
    return builder.concat(builder.identifier('a'), builder.identifier('b'), builder.identifier('c'));
};