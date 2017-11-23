'use strict';

module.exports = function (builder) {
    return builder.program([builder.node(function (node, codegen) {
        var builder = codegen.builder;
        return builder.text(builder.literal('Hello World!'));
    })]);
};