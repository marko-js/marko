"use strict";

module.exports = function(builder) {
    return builder.arrowFunction(
        ["num1", "num2"],
        [builder.returnStatement(builder.binaryExpression("num1", "+", "num2"))]
    );
};
