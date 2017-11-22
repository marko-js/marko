'use strict';

module.exports = function (builder) {
    var templateRoot = builder.templateRoot;

    return templateRoot([builder.forEachProp({
        nameVarName: 'k',
        valueVarName: 'v',
        in: 'myObject',
        body: [builder.functionCall('console.log', [builder.literal('k:'), builder.identifier('k'), builder.literal('v:'), builder.identifier('v')])]
    })]);
};