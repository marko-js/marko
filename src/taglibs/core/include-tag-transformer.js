"use strict";

module.exports = function(el, context) {
    let builder = context.builder;

    if (el.argument) {
        let args = el.argument && builder.parseJavaScriptArgs(el.argument);
        el.argument = null;

        let target = args[0];
        let arg = args[1];

        if (target.type === "Literal") {
            target = context.importTemplate(target.value);
        }

        var includeProps = {
            _target: target
        };

        if (arg) {
            includeProps._arg = arg;
        }

        el.addProps(includeProps);
    } else if (!el.hasProp("_target")) {
        context.addError(
            el,
            'The <include(...)> tag must have an argument: <include("./target.marko")/> or <include(data.renderBody)/>'
        );
    }
};
