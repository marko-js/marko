module.exports = function migrator(elNode, context) {
    if (!elNode.rawTagNameExpression || elNode.tagName[0] === "$") {
        return;
    }

    context.deprecate(
        'The "<partial-${dynamic}>" tag is syntax deprecated. Please use the regular dynamic tag syntax instead with a template literal "<${`partial-${dynamic}`}/>". See: https://github.com/marko-js/marko/wiki/Deprecation:-partial-dynamic-tag'
    );

    elNode.rawTagNameExpression = `\`${elNode.tagName}\``;
};
