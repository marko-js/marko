'use strict';

module.exports = function (builder, codegen) {

    var templateRoot = builder.templateRoot([builder.htmlElement('div', [])]);

    codegen.context.addVar('foo', builder.literal('Hello Foo'));
    codegen.context.addVar('bar', builder.literal('Hello Bar'));

    codegen.context.addStaticVar('fooStatic', builder.literal('Hello Foo'));
    codegen.context.addStaticVar('barStatic', builder.literal('Hello Bar'));

    return templateRoot;
};