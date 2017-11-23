'use strict';

module.exports = function (builder) {
    var startIf = builder.ifStatement(builder.literal(true), [builder.text(builder.literal('A'))]);

    var endIf = builder.ifStatement(builder.literal(true), [builder.text(builder.literal('C'))]);

    return builder.program([startIf, builder.text(builder.literal('B')), endIf]);
};