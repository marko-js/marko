'use strict';

module.exports = function (builder) {
    return builder.functionDeclaration(builder.identifier('foo'), [builder.identifier('bar')], [builder.returnStatement()]);
};