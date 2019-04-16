const resolveFrom = require("resolve-from");

module.exports = function migrate(el, context) {
    const attr = el.getAttribute("w-bind");

    if (!attr) {
        return;
    }

    const value = attr.value;
    const hasWidgetTypes = context.isFlagSet("hasWidgetTypes");
    let componentModule;
    let rendererModule;

    context.setMeta("legacy", true);

    context.deprecate(
        "Legacy components using w-bind and defineRenderer/defineComponent or defineComponent are deprecated. See: https://github.com/marko-js/marko/issues/421"
    );

    if (value == null) {
        componentModule = getDefaultWidgetFile(context.dirname);

        if (!componentModule) {
            context.addError(
                'No corresponding JavaScript module found in the same directory (either "widget.js", "component.js" or "index.js").'
            );
            return;
        }

        if (componentModule.requirePath === "./") {
            rendererModule = componentModule;
        }
    } else if (attr.isLiteralValue()) {
        const literalValue = attr.literalValue;

        if (typeof literalValue !== "string") {
            context.addError(
                'The value for the "w-bind" attribute should be a string. Actual: ' +
                    literalValue
            );
            return;
        }

        const filename = resolveFrom(context.dirname, literalValue);

        if (!filename) {
            this.addError(
                "Target file not found: " +
                    literalValue +
                    " (from: " +
                    context.dirname +
                    ")"
            );
            return;
        }

        componentModule = {
            legacy: true,
            filename,
            requirePath: literalValue
        };
    }

    context.legacyComponentModule = componentModule;
    context.legacyRendererModule = rendererModule;

    context.addMigration({
        description: "Migrate legacy widget with w-bind",
        apply(helpers) {
            if (hasWidgetTypes) {
                return;
            }

            return helpers
                .prompt({
                    type: "confirm",
                    message:
                        "A widget file was discovered, would you like to migrate that as well?\n" +
                        "Note: widget migrations are not 100% safe and should be tested after migration.",
                    initial: true
                })
                .then(shouldMigrate => {
                    if (shouldMigrate) {
                        el.removeAttribute("w-bind");
                        return helpers.run("componentFile", {
                            templateFile: context.filename,
                            componentFile: componentModule.filename
                        });
                    }
                });
        }
    });
};

function getDefaultWidgetFile(dirname) {
    var filename;
    var legacy = true;

    if ((filename = resolveFrom(dirname, "./widget"))) {
        return {
            filename,
            requirePath: "./widget",
            legacy
        };
    } else if ((filename = resolveFrom(dirname, "./component"))) {
        return {
            filename,
            requirePath: "./component",
            legacy
        };
    } else if ((filename = resolveFrom(dirname, "./"))) {
        return {
            filename,
            requirePath: "./",
            legacy
        };
    } else {
        return null;
    }
}
