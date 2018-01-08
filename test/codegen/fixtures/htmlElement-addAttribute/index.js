'use strict';

module.exports = function (builder) {
    var htmlElement = builder.htmlElement('div', [], [builder.text(builder.literal('Hello World'))]);

    htmlElement.addAttribute({
        name: 'class',
        value: builder.concat(builder.literal('foo'), builder.identifier('className')),
        escape: false
    });

    return htmlElement;
};