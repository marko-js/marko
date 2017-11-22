'use strict';

module.exports = function (builder, codegen) {

    var templateRoot = builder.templateRoot([builder.htmlElement('div', [])]);

    codegen.addVar('foo', builder.literal('Hello World'));

    return templateRoot;
};