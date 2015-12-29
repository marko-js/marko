'use strict';

module.exports = function(builder) {
    var vars = [];

    return builder.program([
            builder.slot((slot, codegen) => {
                slot.setContent(codegen.builder.vars(vars));
            }),
            builder.node(function(node, codegen) {
                vars.push({
                    id: 'foo',
                    init: codegen.builder.literal('abc')
                });
            }),
            builder.node(function(node, codegen) {
                vars.push({
                    id: 'bar',
                    init: codegen.builder.literal(123)
                });
            })
        ]);
};