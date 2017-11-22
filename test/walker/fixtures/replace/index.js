'use strict';

module.exports = function (compiler) {
    let builder = compiler.createBuilder();

    let rootNode = builder.templateRoot([builder.htmlElement('ul', {
        'class': 'escapeXml(data.foo)'
    }, [builder.htmlElement('li', {
        'class': builder.literal('color')
    }, [builder.text('color')])])]);

    let walker = compiler.createWalker({
        enter(node) {
            if (node.type === 'FunctionCall' && node.callee.type === 'Identifier' && node.callee.name === 'escapeXml') {
                return node.args[0];
            }
        }
    });

    walker.walk(rootNode);

    return rootNode;
};