const newTags = {
    "async-fragment": "await",
    "async-fragments": "await-reorderer",
    "async-fragment-placeholder": "await-placeholder",
    "async-fragment-timeout": "await-timeout",
    "async-fragment-error": "await-error"
};
module.exports = function migrator(oldNode, context) {
    const oldTag = oldNode.tagName;
    const newTag = newTags[oldTag];
    let provider;
    let varName;
    let argument;
    const attributes = oldNode.attributes;
    const builder = context.builder;

    context.deprecate(
        `The "<${oldTag}>" tag is deprecated. Please use "<${newTag}>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-async-fragment`
    );

    if (!attributes) {
        context.addError(
            "Invalid <aync-fragment> tag. Argument is missing. Example; <async-fragment data-provider=data.userInfo var='userInfo' />"
        );
        return oldNode;
    }

    if (oldTag == "async-fragment" /* new: <await> */) {
        // need to convert data-provider and var attributes
        // to an argument: <await(var from dataProvider)>
        varName = oldNode.getAttributeValue("var").value;
        provider = oldNode.getAttributeValue("data-provider").toString();
        argument = varName + " from " + provider;

        if (!context.util.isValidJavaScriptIdentifier(varName)) {
            context.addError(
                "Invalid <aync-fragment> tag. Argument's variable name should be a valid JavaScript identifier. Example: user, as in <await(user from data.userProvider)>"
            );
            return;
        }

        oldNode.removeAttribute("var");
        oldNode.removeAttribute("data-provider");
    }

    if (oldTag == "async-fragments" /* new: <await-reorderer> */) {
        // all this tag ever did was handling of client reordering
        // we'll remove the attribute as that's all this new tag does
        oldNode.removeAttribute("client-reorder");
    }

    const newNode = builder.htmlElement(newTag, attributes, [], argument);

    oldNode.replaceWith(newNode);
    oldNode.moveChildrenTo(newNode);
};
