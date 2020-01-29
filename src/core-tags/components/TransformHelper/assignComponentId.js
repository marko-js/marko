"use strict";

module.exports = function assignComponentId(isRepeated) {
    // First check if we have already assigned an ID to thie element
    var componentIdInfo = this.componentIdInfo;

    if (componentIdInfo) {
        return this.componentIdInfo;
    }

    var el = this.el;
    var context = this.context;
    var builder = this.builder;

    if (el.noOutput || (el.tagDef && el.tagDef.noOutput)) {
        return;
    }

    let assignedKey;
    var nestedIdExpression;
    var idExpression;

    // In order to attach a DOM event listener directly we need to make sure
    // the target HTML element has an ID that we can use to get a reference
    // to the element during initialization. We generate this unique ID
    // at compile-time to allow consistent IDs during rendering.
    // We need to handle the following scenarios:
    //
    // 1) The HTML element already has an "id" attribute
    // 2) The HTML element has a "ref" or "w-id" attribute (we already converted this
    //    to an "id" attribute above)
    // 3) The HTML does not have an "id" or "ref" attribute. We must add
    //    an "id" attribute with a unique ID.

    var isHtmlElement = el.type === "HtmlElement";
    var isCustomTag = el.type === "CustomTag";

    if (!isCustomTag && !isHtmlElement) {
        return;
    }

    if (el.hasAttribute("key")) {
        assignedKey = el.getAttributeValue("key");
        el.removeAttribute("key");
    }

    if (assignedKey) {
        nestedIdExpression = assignedKey;

        if (isCustomTag) {
            idExpression = this.buildComponentElIdFunctionCall(assignedKey);
            // The element is a custom tag
            this.getComponentArgs().setKey(
                nestedIdExpression,
                true /* user assigned key */
            );
        } else {
            // mark as user-assigned key (@)
            if (assignedKey.type === "Literal") {
                idExpression = builder.literal("@" + assignedKey.value);
            } else {
                idExpression = builder.binaryExpression(
                    builder.literal("@"),
                    "+",
                    assignedKey
                );
            }

            el.setKey(idExpression);
            this.serializeKey();
        }
    } else {
        // Case 3 - We need to add a unique auto key
        let parentForKey = getParentForKeyVar(el, this);
        let uniqueKey = context.nextUniqueId();

        el.isAutoKeyed = true;

        nestedIdExpression = isRepeated
            ? builder.literal(uniqueKey + "[]")
            : builder.literal(uniqueKey.toString());

        idExpression = builder.literal(uniqueKey.toString());

        if (parentForKey) {
            idExpression = builder.binaryExpression(
                idExpression,
                "+",
                parentForKey
            );
            nestedIdExpression = builder.binaryExpression(
                nestedIdExpression,
                "+",
                parentForKey
            );
        }

        if (isCustomTag) {
            this.getComponentArgs().setKey(nestedIdExpression);
        } else {
            el.setKey(idExpression);
        }
    }

    this.componentIdInfo = {
        idExpression: idExpression,
        nestedIdExpression: nestedIdExpression
    };

    return this.componentIdInfo;
};

const getParentForKeyVar = (el, transformHelper) => {
    const context = transformHelper.context;
    const builder = context.builder;
    const parentFor = getParentFor(el);

    if (!parentFor) return null;
    if (parentFor.keyVar) return parentFor.keyVar;

    const keyScopeIdentifier = builder.identifier(
        context.nextUniqueId("keyScope")
    );

    const vars = builder.vars([]);
    const firstElement = getFirstElementChild(parentFor);
    let keyExpression;
    let firstElementKey;

    if (firstElement) {
        const keyValueIdentifier = builder.identifier(
            context.nextUniqueId("keyValue")
        );

        if (firstElement.key) {
            firstElementKey = firstElement.key;
            firstElement.key = keyValueIdentifier;
        } else if (
            firstElement.hasAttribute &&
            firstElement.hasAttribute("key")
        ) {
            firstElementKey = firstElement.getAttributeValue("key");
            firstElement.setAttributeValue("key", keyValueIdentifier);
        }

        if (firstElementKey) {
            // when the child has a key we need to hoist it up and store it in a variable.
            keyExpression = keyValueIdentifier;
            vars.declarations.push(
                builder.variableDeclarator(keyValueIdentifier, firstElementKey)
            );
        }

        // Try to insert before the first node in the loop body.
        firstElement.insertSiblingBefore(vars);
    } else {
        // If the loop has no direct element children, prepend the var.
        parentFor.prependChild(vars);
    }

    if (!keyExpression) {
        keyExpression = createIndexKey(parentFor, transformHelper);
    }

    vars.declarations.push(
        builder.variableDeclarator(
            keyScopeIdentifier,
            builder.binaryExpression(
                builder.literal("["),
                "+",
                builder.binaryExpression(
                    keyExpression,
                    "+",
                    builder.literal("]")
                )
            )
        )
    );

    return (parentFor.keyVar = keyScopeIdentifier);
};

const createIndexKey = (forNode, transformHelper) => {
    const context = transformHelper.context;
    const builder = context.builder;
    const identifier = builder.identifier(context.nextUniqueId("for"));
    const initialize = builder.var(identifier, builder.literal(0));
    const parentForKey = getParentForKeyVar(forNode, transformHelper);

    forNode.insertSiblingBefore(initialize);

    let keyExpression = builder.updateExpression(identifier, "++");

    if (parentForKey) {
        keyExpression = builder.binaryExpression(
            keyExpression,
            "+",
            parentForKey
        );
    }

    return keyExpression;
};

const forASTNodes = ["ForEach", "ForEachProp", "ForRange", "ForStatement"];

const getParentFor = el => {
    let current = el;
    while ((current = current.parentNode) && current.type !== "Macro") {
        if (current.tagName === "for" || forASTNodes.includes(current.type)) {
            return current;
        }
    }
};

const getFirstElementChild = el => {
    let current = el.firstChild;
    while (
        current &&
        current.type !== "HtmlElement" &&
        current.type !== "CustomTag"
    ) {
        current = current.nextSibling;
    }

    return current;
};
