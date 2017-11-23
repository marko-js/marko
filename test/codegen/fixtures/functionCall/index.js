'use strict';

module.exports = function (builder) {
    return builder.functionCall('console.log', [builder.literal('Hello'), builder.identifier('name')]);
};