const camelCase = require("camelcase");
const parseFor = require("./util/parseFor");
const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);
    migrateForLoop(elNode, context);
};

function migrateForLoop(elNode, context) {
    const builder = context.builder;
    let parsed;

    if (!elNode.argument) {
        return;
    }

    try {
        parsed = parseFor(elNode.argument);
        elNode.argument = undefined;
    } catch (e) {
        if (e.code === "INVALID_FOR") {
            context.addError(e.message);
        } else {
            context.addError("Invalid legacy <for(argument)> tag.");
        }

        return elNode;
    }

    switch (parsed.loopType) {
        case "ForEach": {
            let varNamePrefix = "loop";
            let needsParams;
            elNode.params = [parsed.varName];

            if (parsed.iterator) {
                if (parsed.statusVarName) {
                    // When we have both a status var and an iterator it's impossible to convert to a modern for loop.
                    // Instead we convert to the deprecated `<for of=generatorFunction>`.
                    elNode.params.push(parsed.statusVarName);
                    parsed.in = builder.functionCall(
                        builder.memberExpression(
                            parsed.iterator,
                            builder.identifier("bind")
                        ),
                        [builder.literalNull(), parsed.in]
                    );
                } else {
                    // Otherwise we can run the iterator early to build an array for use with a standard `<for of=array>`.
                    const iteratorName =
                        parsed.iterator.type === "Identifier"
                            ? parsed.iterator
                            : builder.identifier("iterator");
                    const listName =
                        parsed.in.type === "Identifier"
                            ? parsed.in
                            : builder.identifier("list");
                    const iteratorResultName = builder.identifier(
                        camelCase(`${iteratorName.name}-${listName.name}`)
                    );
                    const itemName = builder.identifier("item");
                    elNode.insertSiblingBefore(
                        builder.scriptlet({
                            value: printJS(
                                builder.vars([
                                    builder.variableDeclarator(
                                        iteratorResultName,
                                        builder.arrayExpression([])
                                    )
                                ]),
                                context
                            )
                        })
                    );

                    elNode.insertSiblingBefore(
                        builder.scriptlet({
                            value: printJS(
                                builder.functionCall(parsed.iterator, [
                                    parsed.in,
                                    builder.functionDeclaration(
                                        undefined,
                                        [itemName],
                                        [
                                            builder.functionCall(
                                                builder.memberExpression(
                                                    iteratorResultName,
                                                    builder.identifier("push")
                                                ),
                                                [itemName]
                                            )
                                        ]
                                    )
                                ]),
                                context
                            )
                        })
                    );

                    parsed.in = iteratorResultName;
                }
            } else {
                if (parsed.statusVarName) {
                    needsParams = true;
                    varNamePrefix = parsed.statusVarName.name;
                    replaceStatusVarInBody(elNode, context, parsed);
                }

                if (parsed.separator) {
                    needsParams = true;
                    elNode.appendChild(
                        builder.htmlElement(
                            "if",
                            undefined,
                            [builder.text(parsed.separator, false, true)],
                            `${varNamePrefix}Index !== ${varNamePrefix}All.length - 1`
                        )
                    );
                }
            }

            if (needsParams) {
                elNode.params.push(
                    builder.identifier(`${varNamePrefix}Index`),
                    builder.identifier(`${varNamePrefix}All`)
                );
            }

            elNode.setAttributeValue("of", parsed.in);
            break;
        }
        case "ForEachProp":
            if (parsed.statusVarName || parsed.separator) {
                // With forEachProp loops and a status var, we convert it to a forEach loop using Object.keys and reparse.
                elNode.argument = `${printJS(
                    parsed.nameVarName,
                    context
                )} in Object.keys(${printJS(parsed.in, context)}) |`;

                if (parsed.statusVarName) {
                    elNode.argument += ` status-var=${printJS(
                        parsed.statusVarName,
                        context
                    )}`;
                }

                if (parsed.separator) {
                    elNode.argument += ` separator=${printJS(
                        parsed.separator,
                        context
                    )}`;
                }

                elNode.prependChild(
                    builder.scriptlet({
                        value: printJS(
                            builder.var(
                                parsed.valueVarName,
                                builder.memberExpression(
                                    parsed.in,
                                    parsed.nameVarName,
                                    true
                                )
                            ),
                            context
                        )
                    })
                );

                migrateForLoop(elNode, context);
                return;
            }

            elNode.params = [parsed.nameVarName, parsed.valueVarName];
            elNode.setAttributeValue("in", parsed.in);
            break;
        case "ForRange":
            elNode.params = parsed.varName ? [parsed.varName] : [];

            if (parsed.from) {
                elNode.setAttributeValue("from", parsed.from);
            }

            if (parsed.to) {
                elNode.setAttributeValue("to", parsed.to);
            }

            if (parsed.step) {
                elNode.setAttributeValue("step", parsed.step);
            }

            break;
        case "For": {
            const parts = normalizeParts(parsed, builder);
            if (!parts) {
                if (parsed.init) {
                    elNode.insertSiblingBefore(
                        builder.scriptlet({
                            value: printJS(parsed.init, context),
                            block: true
                        })
                    );
                }

                if (parsed.update) {
                    elNode.appendChild(
                        builder.scriptlet({
                            value: printJS(parsed.update, context),
                            block: true
                        })
                    );
                }

                elNode.replaceWith(
                    builder.htmlElement(
                        "while",
                        undefined,
                        elNode.body,
                        parsed.test ? printJS(parsed.test, context) : "true"
                    )
                );
                return;
            }

            elNode.params = [parts.varName];

            if (parts.from) {
                elNode.setAttributeValue("from", parts.from);
            }

            if (parts.to) {
                elNode.setAttributeValue("to", parts.to);
            }

            if (parts.step) {
                elNode.setAttributeValue("step", parts.step);
            }

            break;
        }
    }
}

function normalizeParts(parsed, builder) {
    const init = parsed.init;
    const update = parsed.update;
    const test = parsed.test;

    if (
        !init ||
        !update ||
        !test ||
        init.type !== "Vars" ||
        init.declarations.length !== 1 ||
        test.type !== "BinaryExpression"
    ) {
        return;
    }

    const declarator = init.declarations[0];
    const varName = declarator.id;
    let from = declarator.init;

    if (!from) {
        return;
    }

    let step;
    if (
        update.type === "UpdateExpression" &&
        update.argument.name === varName.name
    ) {
        step = builder.literal(update.operator === "++" ? 1 : -1);
    } else if (
        update.type === "Assignment" &&
        update.left.name === varName.name
    ) {
        if (update.operator === "-=") {
            step = update.right;

            if (step.type === "Literal") {
                step = builder.literal(step.value * -1);
            } else {
                step = builder.binaryExpression(
                    step.value,
                    "*",
                    builder.literal(-1)
                );
            }
        } else if (update.operator === "+=") {
            step = update.right;
        } else {
            return;
        }
    } else {
        return;
    }

    let to;
    if (test.left.name === varName.name) {
        to = test.right;
    } else if (test.right.name === varName.name) {
        to = test.left;
    } else {
        return;
    }

    if (test.operator === "<") {
        if (to.type === "Literal") {
            to = builder.literal(to.value - 1);
        } else {
            to = builder.binaryExpression(to, "-", builder.literal(1));
        }
    } else if (test.operator !== "<=") {
        return;
    }

    if (step) {
        if (step.type === "Literal" && step.value === 1) {
            step = undefined;
        }
    }

    return {
        varName: varName,
        from: from,
        to: to,
        step: step
    };
}

function replaceStatusVarInBody(el, context, parsed) {
    const builder = context.builder;
    const statusVarName = parsed.statusVarName.name;
    const allIdentifer = builder.identifier(`${statusVarName}All`);
    const indexIdentifier = builder.identifier(`${statusVarName}Index`);
    const lengthIdentifier = builder.memberExpression(
        allIdentifer,
        builder.identifier("length")
    );
    const remaps = {
        getIndex: indexIdentifier,
        getLength: lengthIdentifier,
        isFirst: builder.binaryExpression(
            indexIdentifier,
            "===",
            builder.literal(0)
        ),
        isLast: builder.binaryExpression(
            indexIdentifier,
            "===",
            builder.binaryExpression(lengthIdentifier, "-", builder.literal(1))
        )
    };

    const remapKeys = Object.keys(remaps);
    const remapStrings = remapKeys.reduce((result, key) => {
        result[key] = printJS(remaps[key], context);
        return result;
    }, {});
    const remapRegexp = new RegExp(
        `${statusVarName}\\.(${remapKeys.join("|")})\\(\\)`,
        "g"
    );
    const remapReplacer = str =>
        str.replace(remapRegexp, (_, key) => remapStrings[key]);
    const visitor = {
        enter(node) {
            if (
                (node.type === "Text" && !node.isLiteral()) ||
                (node.type === "HtmlElement" && node.argument)
            ) {
                if (typeof node.argument === "string") {
                    node.argument = remapReplacer(node.argument);
                } else {
                    node.argument = context
                        .createWalker(visitor)
                        .walk(node.argument);
                }
            } else if (
                node.type === "Scriptlet" &&
                typeof node.code === "string"
            ) {
                node.code = remapReplacer(node.code);
            } else if (node.type === "Code") {
                node.value = remapReplacer(node.value);
            } else if (node.type === "FunctionCall") {
                const callee = node.callee;
                if (
                    callee.type === "MemberExpression" &&
                    callee.object.name === statusVarName &&
                    remapKeys.includes(callee.property.name)
                ) {
                    this.replace(remaps[callee.property.name]);
                    this.skip();
                }
            }
        }
    };

    context.createWalker(visitor).walk(el.body);
}
