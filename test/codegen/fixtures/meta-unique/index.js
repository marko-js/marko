'use strict';

module.exports = function (builder, codegen) {
    var context = codegen.context;

    var templateRoot = builder.templateRoot([builder.htmlElement('div', [])]);

    context.useMeta = true;
    context.pushMeta('foo', { bar: 1 }, true);
    context.pushMeta('foo', { bar: 1 }, true);
    context.pushMeta('foo', { bar: 2 }, true);

    return templateRoot;
};