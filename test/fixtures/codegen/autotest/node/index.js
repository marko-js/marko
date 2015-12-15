'use strict';

module.exports = function(builder) {
    return builder.node(function(node, generator) {
        var builder = generator.builder;
        return builder.text(builder.literal('Hello World!'));
    });
};