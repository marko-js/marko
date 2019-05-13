"use strict";
var ok = require("assert").ok;

var ieConditionalCommentRegExp = /^\[if [^]*?<!\[endif\]$/;

function isIEConditionalComment(comment) {
    return ieConditionalCommentRegExp.test(comment);
}

function mergeShorthandClassNames(el, shorthandClassNames, context) {
    var builder = context.builder;
    let classNames = shorthandClassNames.map(className => {
        return typeof className == "string"
            ? builder.literal(className)
            : className;
    });

    var classAttr = el.getAttributeValue("class");
    if (classAttr) {
        classNames.push(classAttr);
    }

    let prevClassName;

    var finalClassNames = [];

    for (var i = 0; i < classNames.length; i++) {
        let className = classNames[i];
        if (
            prevClassName &&
            className.type === "Literal" &&
            prevClassName.type === "Literal"
        ) {
            prevClassName.value += " " + className.value;
        } else {
            finalClassNames.push(className);
            prevClassName = className;
        }
    }

    if (finalClassNames.length === 1) {
        el.setAttributeValue("class", finalClassNames[0]);
    } else {
        el.setAttributeValue(
            "class",
            builder.functionCall(context.helper("classList"), [
                builder.literal(finalClassNames)
            ])
        );
    }
}

class Normalizer {
    constructor() {
        this.context = null;
    }

    normalize(rootNode, context) {
        ok(rootNode, '"rootNode" is required');
        ok(context, '"context" is required');

        const normalizer = this;
        normalizer.context = context;

        context
            .createWalker({
                exit(node) {
                    let newNode;

                    switch (node.type) {
                        case "HtmlElement":
                            newNode = normalizer.normalizeElement(node);
                            break;
                        case "Comment":
                        case "HtmlComment":
                            newNode = normalizer.normalizeComment(node);
                            break;
                        default:
                            return;
                    }

                    if (newNode !== node) {
                        return newNode;
                    }
                }
            })
            .walk(rootNode);

        return rootNode;
    }

    normalizeElement(elNode) {
        var context = this.context;
        var builder = context.builder;

        if (elNode.tagName === "marko-compiler-options") {
            elNode.detach();
            return;
        }

        if (elNode.tagName === "marko-migration-flags") {
            elNode.attributes.forEach(attr => {
                context.setFlag(attr.name);
            });
            elNode.detach();
            return;
        }

        var newNode = this.context.createNodeForEl({
            tagName: elNode.rawTagNameExpression
                ? builder.parseExpression(elNode.rawTagNameExpression)
                : elNode.tagName,
            argument: elNode.argument,
            params: elNode.params,
            tagString: elNode.tagString,
            openTagOnly: elNode.openTagOnly,
            selfClosed: elNode.selfClosed,
            pos: elNode.pos,
            attributes: elNode.attributes
        });

        newNode.pos = elNode.pos;

        if (elNode.rawShorthandClassNames) {
            mergeShorthandClassNames(
                newNode,
                elNode.rawShorthandClassNames,
                context
            );
        }

        if (elNode.rawShorthandId) {
            if (newNode.hasAttribute("id")) {
                context.addError(
                    newNode,
                    'A shorthand ID cannot be used in conjunction with the "id" attribute'
                );
            } else {
                newNode.setAttributeValue(
                    "id",
                    typeof elNode.rawShorthandId === "string"
                        ? builder.literal(elNode.rawShorthandId)
                        : elNode.rawShorthandId
                );
            }
        }

        if (
            elNode.params.length &&
            elNode.tagName !== "for" &&
            elNode.tagName !== "macro" &&
            !context.isMacro(elNode.tagName) &&
            !(
                (elNode.tagName === "@then" || elNode.tagName === "@catch") &&
                elNode.parentNode.tagName === "await"
            )
        ) {
            context.setFlag("hasTagParams");
            context.exampleTagParam = newNode;
        }

        elNode.moveChildrenTo(newNode);

        return newNode;
    }

    normalizeComment(commentNode) {
        var preserveComment =
            this.context.isPreserveComments() ||
            isIEConditionalComment(commentNode.comment.value);

        return preserveComment ? commentNode : null;
    }
}

module.exports = Normalizer;
