'use strict';

module.exports = function (builder) {
    var program = builder.program;
    var functionDeclaration = builder.functionDeclaration;
    var functionCall = builder.functionCall;
    var text = builder.text;
    var htmlElement = builder.htmlElement;

    return program([htmlElement('ul', [], [functionCall('forEach', ['data.colors', functionDeclaration(null, ['color'], [functionCall('foo'), htmlElement('li', [], [text('color')]), functionCall('bar')])])])]);
};