'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot;
    var forEach = builder.forEach;
    var textOutput = builder.textOutput;

    return templateRoot([
        forEach('color', 'data.colors', [
            textOutput('color')
        ])
    ]);
};