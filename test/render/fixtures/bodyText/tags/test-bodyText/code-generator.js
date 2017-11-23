function compile(bodyText) {
    return bodyText.toUpperCase();
}

module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    return builder.htmlElement('script', {}, [builder.text(builder.literal(compile(elNode.bodyText)))]);
};