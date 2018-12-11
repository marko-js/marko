const printJS = require("./util/printJS");
const migrateControlFlowDirectives = require("./control-flow-directives");

module.exports = function migrator(elNode, context) {
    const attributes = elNode.attributes;
    const builder = context.builder;
    migrateControlFlowDirectives(elNode, context);
    elNode.setTransformerApplied(migrateControlFlowDirectives);

    context.deprecate(
        'The "<assign>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!attributes) {
        context.addError(
            "Invalid <assign> tag. Argument is missing. Example; <assign x=123 />"
        );
        return elNode;
    }

    elNode.attributes.forEach(attr => {
        elNode.insertSiblingBefore(
            builder.scriptlet({
                value:
                    attr.value == null
                        ? attr.name
                        : `${attr.name} = ${printJS(
                              attr.value,
                              context,
                              null,
                              true
                          )}`
            })
        );
    });

    elNode.detach();
};
