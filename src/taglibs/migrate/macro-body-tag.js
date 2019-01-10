module.exports = function codeGenerator(elNode, codegen) {
    const builder = codegen.builder;
    const dynamicTag = builder.htmlElement(undefined, elNode.attributes);
    dynamicTag.rawTagNameExpression = "macroInput";
    elNode.replaceWith(dynamicTag);
};
