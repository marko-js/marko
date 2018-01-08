'use strict';

module.exports = function (builder) {
    var program = builder.program;
    var identifier = builder.identifier;
    var functionDeclaration = builder.functionDeclaration;
    var functionCall = builder.functionCall;

    return program([functionDeclaration('foo', ['a', 'b', identifier('c')], [functionCall('hello', ['arg1', 'arg2'])])]);
};