module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    return [builder.text(builder.literal('Hello ')), builder.text(elNode.getAttributeValue('name'))];
};