"use strict";

module.exports = function migrator(el, context) {
    let isHTMLElement;
    let found = false;
    const walker = context.createWalker({
        enter(node, parent) {
            if (node.type === "HtmlElement") {
                isHTMLElement = Boolean(node.tagDef && node.tagDef.html);
            }

            if (node.type === "TemplateLiteral" && node.nonstandard) {
                found = true;

                if (
                    !(isHTMLElement && parent.type === "HtmlAttribute") &&
                    node.expressions.length === 1 &&
                    !node.quasis.join("")
                ) {
                    walker.replace(node.expressions[0]);
                } else {
                    node.nonstandard = false;
                }
            }
        },
        exit(node) {
            if (node.type === "HTMLElement") {
                isHTMLElement = false;
            }
        }
    });

    walker.walk(el);

    if (found) {
        context.deprecate(
            "Non standard template literals have been deprecated, please use javascript template literals instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-non-standard-template-literal"
        );
    }
};
