'use strict';

module.exports = function(builder) {
    return builder.htmlElement(
        builder.expression('data.tagName'),
        [
            {
                name: 'class',
                value: builder.literal('greeting')
            }
        ],
        [
                builder.text(builder.literal('Hello World'))
        ]);
};