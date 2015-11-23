'use strict';

module.exports = function(compiler) {
    let builder = compiler.createBuilder();

    let textOutput = builder.textOutput;
    let templateRoot = builder.templateRoot;
    let htmlElement = builder.htmlElement;
    let ifStatement = builder.ifStatement;
    let literal = builder.literal;
    let forEach = builder.forEach;

    let rootNode = templateRoot([
        htmlElement(
            'ul',
            {
                'class': literal('colors'),
                'if': {
                    argument: 'notEmpty(data.colors)'
                }
            },
            [
                htmlElement(
                    'li',
                    {
                        'class': literal('color'),
                        'for': {
                            argument: 'color in data.colors'
                        }
                    },
                    [
                        textOutput('color')
                    ])
            ])
    ]);

    let walker = compiler.createWalker({
        visit: function(node) {
            if (node.type === 'HtmlElement') {
                if (node.hasAttribute('for')) {
                    node.wrap(forEach('color', 'data.colors'));
                    node.removeAttribute('for');
                }

                if (node.hasAttribute('if')) {
                    node.wrap(ifStatement('notEmpty(data.colors)'));
                    node.removeAttribute('if');
                }
            }
        }
    });

    walker.walk(rootNode);

    return rootNode;
};