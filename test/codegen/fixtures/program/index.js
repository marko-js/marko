'use strict';

module.exports = function (builder) {
    return builder.program([builder.vars({
        name: builder.literal('Frank')
    }), builder.functionCall('console.log', [builder.literal('Hello'), builder.identifier('name')])]);
};