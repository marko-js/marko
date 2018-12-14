"use strict";

module.exports = function migrator(el, context) {
    context.addMigration({
        name: "getTemplateData",
        description: "Migrate add 'getTemplateData' call to template",
        apply() {
            context.root.prependChild(
                context.builder.scriptlet({
                    value: "var data = component.getTemplateData(state, input)"
                })
            );
        }
    });
};
