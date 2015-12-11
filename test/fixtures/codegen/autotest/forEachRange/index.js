'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot;
    var forEach = builder.forEach;

    return templateRoot([
        forEach({
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