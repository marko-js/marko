'use strict';

module.exports = function (builder) {
    return builder.functionDeclaration('upperCase', ['str'], [builder.returnStatement(builder.functionCall('str.toUpperCase'))]);
};