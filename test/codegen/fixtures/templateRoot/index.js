'use strict';

module.exports = function (builder) {
    var templateRoot = builder.templateRoot([builder.htmlElement('div', { class: builder.literal('foo') }, [builder.htmlElement('span', { class: builder.literal('bar') })])]);

    templateRoot.prependChild(builder.vars([{
        id: 'foo',
        init: builder.literal('bar')
    }]));

    return templateRoot;
};