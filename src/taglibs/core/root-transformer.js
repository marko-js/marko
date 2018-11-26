"use strict";

const OUT_IDENTIFIER_REG = /[(,] *out *[,)]/;
const renderCallToDynamicTag = require("./util/renderCallToDynamicTag");

module.exports = function transform(el, context) {
    const walker = context.createWalker({
        enter(node) {
            if (
                node.type !== "Scriptlet" ||
                !OUT_IDENTIFIER_REG.test(node.code)
            ) {
                return;
            }

            const replacement = replaceScriptlets(
                context.builder.parseStatement(node.code),
                context
            );

            node.replaceWith(replacement);
        }
    });
    walker.walk(el);
};

function replaceScriptlets(node, context) {
    const builder = context.builder;
    if (!node.type) {
        if (node.replaceChild) {
            node.forEach(child => {
                const replacement = replaceScriptlets(child, context);
                if (child !== replacement) {
                    node.replaceChild(replacement, child);
                }
            });
        } else if (node.body) {
            node.body.forEach(child => {
                const replacement = replaceScriptlets(child, context);
                if (child !== replacement) {
                    node.body.replaceChild(replacement, child);
                }
            });
        }

        return node;
    }

    switch (node.type) {
        case "LogicalExpression":
            node = builder.ifStatement(
                node.operator === "&&" ? node.left : builder.negate(node.left),
                [replaceScriptlets(node.right, context)]
            );
            break;
        case "FunctionCall":
            node = renderCallToDynamicTag(node, context) || node;
            break;
        case "If":
        case "ElseIf":
            node.body = replaceScriptlets(node.body, context);
            if (node.else) {
                replaceScriptlets(node.else, context);
            }
            break;
        case "Else":
        case "ForStatement":
        case "WhileStatement":
            node.body = replaceScriptlets(node.body, context);
            break;
        default:
            break;
    }

    return node;
}
