'use strict';

module.exports = function(builder) {
    var vars = [];

    var varsSlot = builder.slot((slot, generator) => {
        slot.setContent(generator.builder.vars(vars));
    });

    return builder.program([
            builder.ifStatement('true', [
                builder.text(builder.literal('BEFORE - Hello World')),
                varsSlot,
                builder.node(function(node, generator) {
                    vars.push({
                        id: 'foo',
                        init: builder.literal('abc')
                    });
                }),
                builder.node(function(node, generator) {
                    vars.push({
                        id: 'bar',
                        init: builder.literal(123)
                    });
                }),
                builder.text(builder.literal('AFTER - Hello World'))
            ])
        ]);
};