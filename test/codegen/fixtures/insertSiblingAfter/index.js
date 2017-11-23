'use strict';

module.exports = function (builder) {
    var spanElement = builder.htmlElement('span', [{
        name: 'class',
        value: builder.literal('foo')
    }]);

    var htmlElement = builder.htmlElement('div', [{
        name: 'class',
        value: builder.literal('greeting')
    }], [spanElement, builder.text(builder.literal('Hello World'))]);

    let varNode = builder.vars([{
        id: builder.identifier('newVar'),
        init: builder.literal('Hello World')
    }]);

    spanElement.insertSiblingAfter(varNode);

    return builder.ifStatement(builder.literalTrue(), [htmlElement]);
};