'use strict';

module.exports = function (builder) {
    var htmlElement = builder.htmlElement('div', [{
        name: 'class',
        value: builder.literal('greeting')
    }], [builder.text(builder.literal('Hello World'))]);

    htmlElement.onBeforeGenerateCode(event => {
        event.insertCode(builder.functionCall('before', []));
    });

    htmlElement.onAfterGenerateCode(event => {
        event.insertCode(builder.functionCall('after', []));
    });

    var ifStatement = builder.ifStatement('a > b', [htmlElement]);

    return ifStatement;
};