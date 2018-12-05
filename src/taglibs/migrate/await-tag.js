const printJS = require("./util/printJS");
const migrateControlFlowDirectives = require("./control-flow-directives");

module.exports = function migrator(elNode, context) {
    const attributes = elNode.attributes;
    const builder = context.builder;
    migrateControlFlowDirectives(elNode, context);
    elNode.setTransformerApplied(migrateControlFlowDirectives);

    context.deprecate(
        'The "<await>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!attributes) {
        context.addError(
            "Invalid <await> tag. Argument is missing. Example; <await (varName from data.provider) />"
        );
        return elNode;
    }

    elNode.attributes.forEach(attr => {
        elNode.insertSiblingBefore(
            builder.scriptlet({
                value:
                    attr.value == null
                        ? attr.name
                        : `${attr.name} = ${printJS(attr.value, context)}`
            })
        );
    });

    elNode.detach();
};
