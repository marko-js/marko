'use strict';

module.exports = function (builder) {
    return builder.htmlElement('div', [{
        name: 'class',
        value: builder.literal('greeting')
    }], [builder.text(builder.literal('Hello World'))]);
};