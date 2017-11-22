'use strict';

module.exports = function (builder) {
    return builder.functionDeclaration('add', ['num1', 'num2'], [builder.returnStatement(builder.binaryExpression('num1', '+', 'num2'))]);
};