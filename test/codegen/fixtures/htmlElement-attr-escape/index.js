'use strict';

module.exports = function (builder) {
    return builder.htmlElement('div', [{
        name: 'class',
        value: builder.literal('greeting')
    }, {
        name: 'foo',
        value: builder.identifier('bar')
    }], [builder.text(builder.literal('Hello World'))]);
};