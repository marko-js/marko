"use strict";

module.exports = function migrator(el, context) {
    let found = false;
    const walker = context.createWalker({
        enter(node) {
            if (node.type === "TemplateLiteral" && node.nonstandard) {
                found = true;

                if (node.expressions.length === 1 && !node.quasis.join("")) {
                    walker.replace(node.expressions[0]);
                } else {
                    node.nonstandard = false;
                }
            }
        }
    });

    walker.walk(el);

    if (found) {
        context.deprecate(
            "Non standard template literals have been deprecated, please use javascript template literals instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-nonstandard-template-literals"
        );
    }
};
