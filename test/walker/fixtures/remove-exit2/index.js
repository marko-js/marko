'use strict';

module.exports = function (compiler) {
    let builder = compiler.createBuilder();

    let rootNode = builder.templateRoot([builder.htmlElement('ul', null, [builder.htmlElement('li', null, [builder.text('a')]), builder.htmlElement('REMOVEME', null, [builder.text('b')]), builder.htmlElement('li', null, [builder.text('c')])])]);

    let walker = compiler.createWalker({
        exit(node) {
            if (node.type === 'HtmlElement' && node.tagName === 'REMOVEME') {
                walker.remove();
            }
        }
    });

    walker.walk(rootNode);

    return rootNode;
};