const awaitTagMigration = require("./await-tag");
const newTags = {
    "async-fragment-placeholder": "await-placeholder",
    "async-fragment-timeout": "await-timeout",
    "async-fragment-error": "await-error"
};
module.exports = function migrator(elNode, context) {
    const builder = context.builder;
    const attributes = elNode.attributes;

    context.deprecate(
        `The "<async-fragment>" tag is deprecated. Please use "<await>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-async-fragment`
    );

    if (!attributes || !attributes.length) {
        context.addError(
            'Invalid <async-fragment> tag. Argument is missing. Example; <async-fragment data-provider=data.userInfo var="userInfo" />'
        );
        return elNode;
    }

    // need to convert data-provider and var attributes
    // to an argument: <await(var from dataProvider)>
    const varName = elNode.getAttributeValue("var").value;
    const provider = elNode.getAttributeValue("data-provider").toString();
    const argument = varName + " from " + provider;
    elNode.removeAttribute("var");
    elNode.removeAttribute("data-provider");

    if (!context.util.isValidJavaScriptIdentifier(varName)) {
        context.addError(
            'Invalid <async-fragment> tag. Argument\'s variable name should be a valid JavaScript identifier. Example: user, as in <async-fragment data-provider=data.userInfo var="userInfo" />'
        );
        return;
    }

    elNode.forEachChild(child => {
        const newTag = newTags[child.tagName];
        if (newTag) {
            child.tagName = newTag;
            child.tagNameExpression = builder.literal(newTag);
        }
    });

    elNode.tagName = "await";
    elNode.tagNameExpression = builder.literal(elNode.tagName);
    elNode.argument = argument;
    awaitTagMigration(elNode, context);
};
