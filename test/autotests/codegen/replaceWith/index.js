'use strict';
const expect = require('chai').expect;

module.exports = function(builder) {
    var templateRoot = builder.templateRoot([
        builder.htmlElement(
            'div',
            { class: builder.literal('foo') }),
        builder.htmlElement(
            'div',
            { class: builder.literal('bar') }),
        builder.htmlElement(
            'div',
            { class: builder.literal('baz') })
    ]);

    let divEl = templateRoot.firstChild;
    expect(divEl.tagName).to.equal('div');

    divEl.replaceWith(builder.htmlElement(
        'span',
        { class: builder.literal('foo1') }));

    return templateRoot;
};
