'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot;
    var literal = builder.literal;
    var functionDeclaration = builder.functionDeclaration;
    var returnStatement = builder.returnStatement;
    var functionCall = builder.functionCall;
    var ifStatement = builder.ifStatement;
    var vars = builder.vars;
    var textOutput = builder.textOutput;
    var htmlOutput = builder.htmlOutput;
    var htmlElement = builder.htmlElement;

    return templateRoot([
        htmlElement(
            'ul',
            [],
            [
                functionCall('forEach', [
                    'data.colors',
                    functionDeclaration(null, ['color'], [
                        functionCall('foo'),
                        htmlElement(
                            'li',
                            [],
                            [
                                textOutput('color')
                            ]),
                        functionCall('bar')
                    ])
                ]),
            ])
    ]);
};