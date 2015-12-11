'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot;
    var forEach = builder.forEach;

    return templateRoot([
        forEach({
            nameVarName: 'k',
            valueVarName: 'v',
            target: 'myArray',
            body: [
                builder.functionCall('console.log', [
                    builder.literal('k:'),
                    builder.identifier('k'),
                    builder.literal('v:'),
                    builder.identifier('v')
                ])
            ]
        })
    ]);
};