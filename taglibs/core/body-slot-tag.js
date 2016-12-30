module.exports = function codeGenerator(elNode, generator) {
    var context = generator.context;
    var builder = generator.builder;
    var includeNode = context.createNodeForEl('include');
    includeNode.addProp(
        '_target',
        builder.memberExpression(
            builder.identifier('data'),
            builder.identifier('renderBody')));
    return includeNode;
};