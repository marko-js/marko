module.exports = function(el, context) {
    var builder = context.builder;
    var rootNode = builder.containerNode(function() {
        return context.createNodeForEl({
            tagName: "div",
            body: rootNode.body
        });
    });

    context.root.moveChildrenTo(rootNode);
    context.root.appendChild(rootNode);
    el.detach();
};
