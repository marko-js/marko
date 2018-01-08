'use strict';

module.exports = function (builder) {
    var program = builder.program;
    var ifStatement = builder.ifStatement;
    var elseIfStatement = builder.elseIfStatement;
    var elseStatement = builder.elseStatement;
    var strictEquality = builder.strictEquality;
    var assignment = builder.assignment;
    var literal = builder.literal;

    return program([ifStatement(strictEquality('a', '1'), [assignment('foo', literal(1))], elseIfStatement(strictEquality('a', '2'), [assignment('foo', literal(2))], elseStatement([assignment('foo', literal(3))])))]);
};