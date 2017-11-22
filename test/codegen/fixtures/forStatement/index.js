'use strict';

module.exports = function (builder) {

    return builder.forStatement(builder.vars([{
        id: 'i',
        init: builder.literal(0)
    }]), builder.binaryExpression('i', '<', builder.literal(0)), builder.updateExpression('i', '++'), [builder.functionCall('console.log', [builder.identifier('i')])]);
};