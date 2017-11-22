'use strict';

module.exports = function (builder) {
    var anchor = builder.htmlElement('a', {
        href: 'data.url'
    }, [builder.text(builder.literal('Hello World'))]);

    anchor.setBodyOnlyIf('!data.url');

    return builder.ifStatement(builder.literal(true), [anchor]);
};