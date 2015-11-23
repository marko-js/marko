'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot;
    var literal = builder.literal;
    var functionDeclaration = builder.functionDeclaration;
    var functionCall = builder.functionCall;
    var ifStatement = builder.ifStatement;
    var textOutput = builder.textOutput;
    var htmlOutput = builder.htmlOutput;
    var htmlElement = builder.htmlElement;

    var rootNode = templateRoot([
        textOutput(literal('Hello')),
        htmlOutput('data.name'),
        textOutput(literal('!')),
        ifStatement(
            functionCall('notEmpty', 'data.colors'),
            [
                htmlElement('ul',
                    [
                        { name: 'class', value: literal('colors') }
                    ],
                    [
                        functionCall('forEach', [
                            'data.colors',
                            functionDeclaration(null, ['color'], [
                                htmlElement('li',
                                    { 'class': literal('color')},
                                    [
                                        textOutput('color')
                                    ])
                            ])
                        ]),
                    ])
            ])
    ]);

    return rootNode;
};