'use strict';

module.exports = function(builder) {
    var program = builder.program;

    return program([
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