module.exports = function codeGenerator(elNode, context) {
    context.deprecate(
        'The "<macro-body>" tag has been deprecated. Please use the <${dynamic}/> tag instead, eg: "<macro(input) ...><${input.renderBody}/></macro>". See: https://github.com/marko-js/marko/wiki/Deprecation:-legacy-macro',
        elNode
    );

    const builder = context.builder;
    const dynamicTag = builder.htmlElement(undefined, elNode.attributes);
    dynamicTag.rawTagNameExpression = "macroInput";
    elNode.replaceWith(dynamicTag);
};
