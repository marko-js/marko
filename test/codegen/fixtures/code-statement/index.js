'use strict';

module.exports = function (builder) {
    return builder.program([builder.code('var a = 1;\nvar b = 2;'), builder.assignment(builder.identifier('b'), builder.literal(3))]);
};