'use strict';

module.exports = function (builder) {
    var div = builder.htmlElement('div', [], [builder.text(builder.literal('Hello World'))]);

    var span = builder.htmlElement('span', [], [builder.text(builder.literal('Foo'))]);

    div.moveChildrenTo(span);

    return builder.program([div, span]);
};