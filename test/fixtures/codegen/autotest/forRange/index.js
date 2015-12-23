'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot;

    return templateRoot([
        builder.forRange({
            varName: 'i',
            from: 0,
            to: 'myArray.length',
            step: 2,
            body: [
                builder.functionCall('console.log', [
                    builder.identifier('i')
                ])
            ]
        })
    ]);
};