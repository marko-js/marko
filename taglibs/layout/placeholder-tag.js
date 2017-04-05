module.exports = function render(oldNode, context) {
    context.deprecate('The <layout-placeholder> tag is deprecated. Please use <include> instead. See: https://github.com/marko-js/marko/issues/452');
    
    var name = oldNode.getAttributeValue('name');
    var builder = context.builder;
    var content = builder.memberExpression('input', name.value);

    var newNode = context.createNodeForEl('include');
    newNode.addProps({ _target:content });

    if (oldNode.firstChild) {
        var ifNode = builder.ifStatement(content, [newNode]);
        var elseNode = builder.elseStatement();
        oldNode.moveChildrenTo(elseNode);

        oldNode.replaceWith(ifNode);
        ifNode.insertSiblingAfter(elseNode);
    } else {
        oldNode.replaceWith(newNode);
    }
};