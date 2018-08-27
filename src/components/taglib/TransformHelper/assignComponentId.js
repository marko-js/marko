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

    // LEGACY -- Remove in Marko 5.0
    if (!isCustomTag && el.tagName === "invoke") {
        isCustomTag = true;
    }

    if (!isCustomTag && !isHtmlElement) {
        return;
    }

    if (el.hasAttribute("w-id")) {
        context.deprecate(
            'The "w-id" attribute is deprecated. Please use "key" instead.'
        );

        if (el.hasAttribute("key")) {
            this.addError(
                'The "w-id" attribute cannot be used in conjunction with the "key" attributes.'
            );
            return;
        }

        if (el.hasAttribute("ref")) {
            this.addError(
                'The "w-id" attribute cannot be used in conjunction with the "ref" attributes.'
            );
            return;
        }

        assignedKey = el.getAttributeValue("w-id");

        el.removeAttribute("w-id");
    } else if (el.hasAttribute("key")) {
        assignedKey = el.getAttributeValue("key");
        el.removeAttribute("key");
    } else if (el.hasAttribute("ref")) {
        context.deprecate(
            'The "ref" attribute is deprecated. Please use "key" instead.'
        );
        assignedKey = el.getAttributeValue("ref");
        el.removeAttribute("ref");
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
            if (el.data.userAssignedKey !== false) {
                if (
                    context.data.hasLegacyForKey ||
                    context.data.hasImperativeComponentIds
                ) {
                    el.setAttributeValue(
                        "id",
                        this.buildComponentElIdFunctionCall(assignedKey)
                    );
                }
            }

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
        let uniqueKey = this.nextUniqueId();

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

    var transformHelper = this;

    this.componentIdInfo = {
        idExpression: idExpression,
        nestedIdExpression: nestedIdExpression,
        idVarNode: null,
        createIdVarNode: function() {
            if (this.idVarNode) {
                return this.idVarNode;
            }

            let uniqueElId = transformHelper.nextUniqueId();
            let idVarName = "__key" + uniqueElId;
            let idVar = builder.identifier(idVarName);

            this.idVarNode = builder.vars([
                {
                    id: idVarName,
                    init: builder.functionCall(
                        builder.memberExpression(
                            builder.identifier("__component"),
                            builder.identifier("___nextKey")
                        ),
                        [idExpression]
                    )
                }
            ]);

            this.idExpression = idExpression = idVar;

            this.nestedIdExpression = nestedIdExpression = builder.concat(
                builder.literal("#"),
                idVar
            );

            if (isCustomTag) {
                transformHelper.getComponentArgs().setKey(nestedIdExpression);
            } else {
                el.setKey(idExpression);
            }

            return this.idVarNode;
        }
    };

    return this.componentIdInfo;
};

const getParentForKeyVar = (el, transformHelper) => {
    const context = transformHelper.context;
    const builder = context.builder;
    const parentFor = getParentFor(el);

    if (!parentFor) return null;
    if (parentFor.keyVar) return parentFor.keyVar;

    const keyExpression =
        getChildKey(parentFor) || createIndexKey(parentFor, transformHelper);
    const bracketedKeyExpression = builder.binaryExpression(
        builder.literal("["),
        "+",
        builder.binaryExpression(keyExpression, "+", builder.literal("]"))
    );
    const varName = "keyscope__" + transformHelper.nextUniqueId();
    const varDeclaration = builder.var(varName, bracketedKeyExpression);

    parentFor.prependChild(varDeclaration);

    return (parentFor.keyVar = builder.identifier(varName));
};

const createIndexKey = (forNode, transformHelper) => {
    const context = transformHelper.context;
    const builder = context.builder;
    const varName = "for__" + transformHelper.nextUniqueId();
    const intialize = builder.parseStatement(`var ${varName} = 0;`);
    const parentForKey = getParentForKeyVar(forNode, transformHelper);

    forNode.insertSiblingBefore(intialize);

    let keyExpression = builder.parseExpression(`${varName}++`);

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
    while ((current = current.parentNode)) {
        if (current.tagName === "for" || forASTNodes.includes(current.type)) {
            return current;
        }
    }
};

const getChildKey = el => {
    let current = el.firstChild;
    while (current) {
        if (current.key) return current.key;
        if (current.hasAttribute && current.hasAttribute("key")) {
            return current.getAttributeValue("key");
        }
        current = current.nextSibling;
    }
};
