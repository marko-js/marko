'use strict';

module.exports = function(builder) {
    var templateRoot = builder.templateRoot([
        builder.htmlElement(
            'div',
            [])
    ]);

    templateRoot.prependChild(builder.vars([
        {
            id: 'foo',
            init: builder.literal('bar')
        }
    ]));

    console.log(templateRoot.body.items);

    return templateRoot;
};