const findNonControlFlowParent = require("../util/findNonControlFlowParent");
const legacyNestedTagSyntax = /^(.+):(.+)$/;
module.exports = function migrate(el, context) {
    if (el.rawTagNameExpression) {
        return;
    }

    const matches = el.tagName.match(legacyNestedTagSyntax);
    if (!matches) {
        return;
    }

    const [, nestedTagPrefix, nestedTagName] = matches;

    if (!nestedTagName) {
        return;
    }

    const parent = findNonControlFlowParent(el);
    // console.log('foop', 'parent.tagName', parent.tagName)
    // console.log('tagPrefix', nestedTagPrefix)

    // Don’t migrate XML-namespaced elements
    if (!parent || parent.tagName !== nestedTagPrefix) {
        return;
    }

    el.tagName = `@${nestedTagName}`;

    context.deprecate(
        'The "<my-tag:nested>" tagName syntax is deprecated. Please use the "<@nested>" tagName syntax instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-legacy-nested-tag',
        el
    );
};
