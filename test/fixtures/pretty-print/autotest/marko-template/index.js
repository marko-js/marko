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
        functionDeclaration('create', ['__helpers'], [
            vars([
                { id: 'str', init: '__helpers.s'},
                { id: 'empty', init: '__helpers.e'},
                { id: 'notEmpty', init: '__helpers.ne'}
            ]),

            returnStatement(functionDeclaration('render', ['data', 'out'], [
                textOutput(literal('Hello')),
                htmlOutput('data.name'),
                textOutput(literal('!')),
                ifStatement(
                    functionCall('notEmpty', 'data.colors'),
                    [

                        htmlElement(
                            'ul',
                            [
                                { name: 'class', value: literal('colors') }
                            ],
                            [
                                functionCall('forEach', [
                                    'data.colors',
                                    functionDeclaration(null, ['color'], [
                                        htmlElement(
                                            'li',
                                            { 'class': literal('color')},
                                            [
                                                textOutput('color')
                                            ])
                                    ])
                                ]),
                            ])
                    ])
            ]))
        ])

    ]);
};