"use strict";

module.exports = function migrator(el, context) {
    context.addMigration({
        name: "dataIsState",
        description:
            "Migrate add `data = state` since only `getInitialState` was defined in widget",
        apply() {
            context.root.prependChild(
                context.builder.scriptlet({
                    value: "var data = state"
                })
            );
        }
    });
};
