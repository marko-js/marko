'use strict';

module.exports = function (builder) {
    var templateRoot = builder.templateRoot;
    var literal = builder.literal;
    var functionDeclaration = builder.functionDeclaration;
    var functionCall = builder.functionCall;
    var ifStatement = builder.ifStatement;
    var text = builder.text;
    var html = builder.html;
    var htmlElement = builder.htmlElement;

    var rootNode = templateRoot([text(literal('Hello')), html('data.name'), text(literal('!')), ifStatement(functionCall('notEmpty', ['data.colors']), [htmlElement('ul', [{ name: 'class', value: literal('colors') }], [functionCall('forEach', ['data.colors', functionDeclaration(null, ['color'], [htmlElement('li', { 'class': literal('color') }, [text('color')])])])])])]);

    return rootNode;
};