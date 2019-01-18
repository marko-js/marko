const printJS = require("./util/printJS");

module.exports = function migrator(elNode, context) {
    const builder = context.builder;
    const attributes = elNode.attributes;
    const defAttr = attributes[0];

    if (
        !attributes.length ||
        attributes.some(
            attr => attr.name === "name" && attr.value.type === "Literal"
        )
    ) {
        return;
    }

    if (!defAttr || defAttr.value !== undefined) {
        context.addError(
            elNode,
            "The <macro> tag must contain a name as its first attribute, example: <macro greeting()>"
        );
        return elNode;
    }

    context.deprecate(
        'The "<macro my-macro(input)>" syntax has been deprecated. Please use the new tag param syntax, eg: "<macro(input) name="my-macro">. See: https://github.com/marko-js/marko/wiki/Deprecation:-legacy-macro',
        elNode
    );

    const name = defAttr.name;
    const params = defAttr.argument
        ? builder.parseJavaScriptParams(defAttr.argument)
        : [];
    elNode.params = [builder.identifier("macroInput")];
    elNode.argument = undefined;
    elNode.addAttribute({ name: "name", value: builder.literal(name) });
    elNode.removeAttribute(name);

    params
        .slice()
        .reverse()
        .forEach(param => {
            const name = builder.identifier(param.name);
            const value = builder.memberExpression(
                builder.identifier("macroInput"),
                name
            );
            elNode.prependChild(
                builder.scriptlet({
                    value: printJS(
                        builder.vars([builder.variableDeclarator(name, value)]),
                        context
                    )
                })
            );
        });

    // Find all usages of the Macro and migrate the arguments to attributes.
    const walker = context.createWalker({
        enter(child) {
            if (
                child.type === "HtmlElement" &&
                child.tagName === name &&
                child.argument
            ) {
                const childArgs = builder.parseJavaScriptArgs(child.argument);
                child.argument = undefined;

                for (let i = 0; i < params.length; i++) {
                    const name = params[i].name;
                    const value = childArgs[i];
                    child.addAttribute({ name: name, value: value });
                }
            }
        }
    });

    walker.walk(context.root);
};
