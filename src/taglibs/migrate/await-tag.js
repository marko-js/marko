const printJS = require("./util/printJS");

module.exports = function migrator(elNode, context) {
    const builder = context.builder;
    const argument = elNode.argument;
    const match =
        argument && /^([$A-Z_][0-9A-Z_$]*) from (.*)$/i.exec(argument);

    if (!match) {
        return;
    }

    context.deprecate(
        'The "<await(result from promise)>" syntax has been deprecated, please use the modern syntax of "<await(promise)><@then|result|>". See: https://github.com/marko-js/marko/wiki/Deprecation:-async-tag'
    );

    elNode.argument = undefined;
    let provider = builder.expression(match[2]);
    const varName = match[1];
    const methodExpression = elNode.getAttributeValue("method");
    const scopeExpression =
        elNode.getAttributeValue("scope") ||
        (methodExpression ? provider : null);
    const argAssignments = elNode.attributes
        .filter(attr => attr.name && attr.name.startsWith("arg-"))
        .map(attr => {
            elNode.removeAttribute(attr.name);
            return [attr.name.slice(4), attr.value];
        });
    let argExpression = elNode.getAttributeValue("arg");

    elNode.removeAttribute("method");
    elNode.removeAttribute("scope");
    elNode.removeAttribute("arg");

    if (methodExpression) {
        provider = builder.memberExpression(provider, methodExpression, true);
    }

    if (argExpression) {
        if (argAssignments.length) {
            const argIdentifier = builder.identifier("arg");
            if (argExpression.type !== "ObjectExpression") {
                argExpression = builder.binaryExpression(
                    argExpression,
                    "||",
                    builder.objectExpression([])
                );
            }

            elNode.insertSiblingBefore(
                builder.scriptlet({
                    value: printJS(
                        builder.vars({
                            arg: argExpression
                        }),
                        context
                    )
                })
            );

            argAssignments.forEach(assignment => {
                elNode.insertSiblingBefore(
                    builder.scriptlet({
                        value: printJS(
                            builder.assignment(
                                builder.memberExpression(
                                    argIdentifier,
                                    builder.literal(assignment[0]),
                                    true
                                ),
                                assignment[1],
                                "="
                            ),
                            context
                        )
                    })
                );
            });

            argExpression = argIdentifier;
        }
    } else if (argAssignments.length) {
        argExpression = builder.objectExpression(
            argAssignments.reduce((obj, parts) => {
                obj[parts[0]] = parts[1];
                return obj;
            }, {})
        );
    }

    if (argExpression || scopeExpression) {
        const callArgs = [scopeExpression || builder.literal(null)];
        if (argExpression) {
            callArgs.push(argExpression);
        }
        provider = builder.functionCall(
            builder.memberExpression(provider, builder.identifier("bind")),
            callArgs
        );
    }

    elNode.argument = printJS(provider, context);

    let placeholderBody;
    if (elNode.hasAttribute("placeholder")) {
        context.deprecate(
            'The "placeholder" attribute on the "<await>" tag is deprecated. Please use the "<@placeholder>" nested tag instead.'
        );

        placeholderBody = [
            builder.text(elNode.getAttributeValue("placeholder"))
        ];
        elNode.removeAttribute("placeholder");
    }

    let timeoutBody;
    if (elNode.hasAttribute("timeout-message")) {
        context.deprecate(
            'The "timeout-message" attribute on the "<await>" tag is deprecated. Please use the "<@catch|err|>" nested tag instead with a check for "err.name === "TimeoutError".'
        );

        timeoutBody = [
            builder.text(elNode.getAttributeValue("timeout-message"))
        ];
        elNode.removeAttribute("timeout-message");
    }

    let errorBody;
    if (elNode.hasAttribute("error-message")) {
        context.deprecate(
            'The "error-message" attribute on the "<await>" tag is deprecated. Please use the "<@catch>" nested tag instead.'
        );
        errorBody = [builder.text(elNode.getAttributeValue("error-message"))];
        elNode.removeAttribute("error-message");
    }

    elNode.forEachChild(childNode => {
        if (childNode.type !== "HtmlElement") {
            return;
        }

        switch (childNode.tagName) {
            case "await-placeholder":
                placeholderBody = childNode.body;
                break;
            case "await-timeout":
                timeoutBody = childNode.body;
                break;
            case "await-error":
                errorBody = childNode.body;
                break;
            default:
                return;
        }

        childNode.detach();
    });

    const renderPlaceholderAttr = elNode.getAttributeValue("renderPlaceholder");
    const renderTimeoutAttr = elNode.getAttributeValue("renderTimeout");
    const renderErrorAttr = elNode.getAttributeValue("renderError");
    elNode.removeAttribute("renderPlaceholder");
    elNode.removeAttribute("renderTimeout");
    elNode.removeAttribute("renderError");

    if (renderPlaceholderAttr && !placeholderBody) {
        context.deprecate(
            'The "renderPlaceholder" attribute on the "<await>" tag is deprecated and will be removed in a future version of Marko.'
        );
        placeholderBody = [buildDynamicTag(renderPlaceholderAttr, context)];
    }

    if (renderTimeoutAttr && !timeoutBody) {
        context.deprecate(
            'The "renderTimeout" attribute on the "<await>" tag is deprecated and will be removed in a future version of Marko.'
        );
        timeoutBody = [buildDynamicTag(renderTimeoutAttr, context)];
    }

    if (renderErrorAttr && !errorBody) {
        context.deprecate(
            'The "renderError" attribute on the "<await>" tag is deprecated and will be removed in a future version of Marko.'
        );
        errorBody = [buildDynamicTag(renderErrorAttr, context)];
    }

    elNode._normalizeChildTextNodes(context);

    if (elNode.body.length) {
        const thenNode = builder.htmlElement("@then");
        thenNode.params = [varName];
        elNode.moveChildrenTo(thenNode);
        elNode.appendChild(thenNode);
    }

    if (placeholderBody) {
        elNode.appendChild(
            builder.htmlElement("@placeholder", undefined, placeholderBody)
        );
    }

    if (timeoutBody) {
        const originalErrorBody = errorBody;
        errorBody = [
            builder.htmlElement(
                "if",
                undefined,
                timeoutBody,
                'err.name === "TimeoutError"'
            )
        ];

        if (originalErrorBody) {
            errorBody.push(
                builder.htmlElement("else", undefined, originalErrorBody)
            );
        }
    }

    if (errorBody) {
        const catchNode = builder.htmlElement("@catch", undefined, errorBody);
        if (timeoutBody) {
            catchNode.params = ["err"];
        }

        elNode.appendChild(catchNode);
    }
};

function buildDynamicTag(expression, context) {
    const node = context.builder.htmlElement();
    node.rawTagNameExpression = printJS(expression, context);
    return node;
}
