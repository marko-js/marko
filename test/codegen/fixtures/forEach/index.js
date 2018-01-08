'use strict';

module.exports = function (builder) {
    var templateRoot = builder.templateRoot;
    var forEach = builder.forEach;
    var text = builder.text;

    return templateRoot([forEach('color', 'data.colors', [text('color')])]);
};