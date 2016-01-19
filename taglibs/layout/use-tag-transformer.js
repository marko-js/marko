'use strict';

module.exports = function transform(el, context) {
    var argument = el.argument;
    if (!argument) {
        context.addError(el, 'Invalid <layout-use> tag. Expected: <layout-use(template[, data]) ...>');
        return;
    }
    var builder = context.builder;

    var args = builder.parseJavaScriptArgs(argument);
    var template = args[0];

    if (template.type === 'Literal') {
        template = context.importTemplate(template.value);
    }

    if (args[1]) {
        el.setAttributeValue('__data', args[1]);
    }

    el.argument = null;

    el.setAttributeValue('__template', template);
};