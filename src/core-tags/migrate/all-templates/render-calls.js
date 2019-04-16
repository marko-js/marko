"use strict";

const printJS = require("../util/printJS");
const OUT_IDENTIFIER_REG = /[(,] *out *[,)]/;
const renderCallToDynamicTag = require("../util/renderCallToDynamicTag");

module.exports = function migrator(el, context) {
    const walker = context.createWalker({
        enter(node) {
            if (
                node.type !== "Scriptlet" ||
                !OUT_IDENTIFIER_REG.test(node.code)
            ) {
                return;
            }

            let hasErrors;
            let foundRenderCall;
            const replacement = replaceScriptlets(
                context.builder.parseStatement(node.code),
                context
            );

            if (!foundRenderCall) {
                return;
            }

            context.deprecate(
                "Directly rendering by passing `out` to a function is deprecated. Please use the dynamic tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-imperative-render-calls"
            );

            if (hasErrors) {
                return;
            }

            if (!replacement.type) {
                replacement.forEachChild(child =>
                    node.insertSiblingBefore(child)
                );
                node.detach();
            } else {
                node.replaceWith(replacement);
            }

            function replaceScriptlets(node, context) {
                const builder = context.builder;
                if (!node.type) {
                    if (node.replaceChild) {
                        node.forEach(child => {
                            const replacement = replaceScriptlets(
                                child,
                                context
                            );
                            if (child !== replacement) {
                                node.replaceChild(replacement, child);
                            }
                        });
                    } else if (node.body) {
                        node.body.forEach(child => {
                            const replacement = replaceScriptlets(
                                child,
                                context
                            );
                            if (child !== replacement) {
                                node.body.replaceChild(replacement, child);
                            }
                        });
                    }

                    return node;
                }

                switch (node.type) {
                    case "LogicalExpression":
                        node = builder.htmlElement(
                            "if",
                            undefined,
                            [replaceScriptlets(node.right, context)],
                            printJS(
                                node.operator === "&&"
                                    ? node.left
                                    : builder.negate(node.left),
                                context
                            )
                        );
                        break;
                    case "FunctionCall":
                        if (
                            node !==
                            (node =
                                renderCallToDynamicTag(node, context) || node)
                        ) {
                            foundRenderCall = true;
                        }

                        break;
                    case "If":
                        node = builder.htmlElement(
                            "if",
                            undefined,
                            replaceScriptlets(node.body, context),
                            printJS(node.test, context)
                        );
                        break;
                    case "ElseIf":
                        node = builder.htmlElement(
                            "else-if",
                            undefined,
                            replaceScriptlets(node.body, context),
                            printJS(node.test, context)
                        );
                        break;
                    case "Else":
                        node = builder.htmlElement(
                            "else",
                            undefined,
                            replaceScriptlets(node.body, context)
                        );
                        break;
                    case "ForStatement":
                        node = builder.htmlElement(
                            "for",
                            undefined,
                            replaceScriptlets(node.body, context),
                            `${printJS(node.init, context)}; ${printJS(
                                node.test,
                                context
                            )}; ${printJS(node.update, context)}`
                        );
                        break;
                    case "WhileStatement":
                        node = builder.htmlElement(
                            "while",
                            undefined,
                            replaceScriptlets(node.body, context),
                            printJS(node.test, context)
                        );
                        break;
                    default:
                        hasErrors = true;
                        break;
                }

                return node;
            }
        }
    });
    walker.walk(el);
};
