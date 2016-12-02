'use strict';

module.exports = function codeGenerator(el, context) {
    let builder = context.builder;

    let target;
    let arg;

    if (el.argument) {
        let args = el.argument && builder.parseJavaScriptArgs(el.argument);
        el.argument = null;

        target = args[0];
        arg = args[1];
    } else {
        return;
    }

    if (target.type === 'Literal') {
        target = context.importTemplate(target.value);
    }

    var includeProps = {
        _target: target
    };

    if (arg) {
        includeProps._arg = arg;
    }

    el.data.includeTarget = target;

    el.addProps(includeProps);
};