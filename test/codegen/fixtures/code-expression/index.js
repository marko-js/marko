'use strict';

module.exports = function (builder) {
    var program = builder.program;
    var ifStatement = builder.ifStatement;
    var strictEquality = builder.strictEquality;
    var assignment = builder.assignment;
    var literal = builder.literal;

    return program([ifStatement(builder.code('a === b'), [assignment('foo', literal('bar'))])]);
};