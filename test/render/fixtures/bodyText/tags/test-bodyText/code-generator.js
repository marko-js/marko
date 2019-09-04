function compile(bodyText) {
    return bodyText.toUpperCase();
}

module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    return builder.htmlElement("script", { type: '"text/html"' }, [
        builder.text(builder.literal(compile(elNode.bodyText)))
    ]);
};
