'use strict';

module.exports = function (builder) {
    var program = builder.program;
    var ifStatement = builder.ifStatement;
    var elseStatement = builder.elseStatement;
    var strictEquality = builder.strictEquality;
    var assignment = builder.assignment;
    var literal = builder.literal;

    return program([ifStatement(strictEquality('a', '1'), [assignment('foo', literal(1))], elseStatement([assignment('foo', literal(2))]))]);
};