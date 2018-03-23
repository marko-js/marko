module.exports = function render(oldNode, context) {
    context.deprecate(
        "The <layout-put> tag is deprecated. Please use <include> instead. See: https://github.com/marko-js/marko/issues/452"
    );

    var name = oldNode.getAttributeValue("into").value;
    var value = oldNode.getAttributeValue("value");

    oldNode.removeAttribute("into");
    oldNode.removeAttribute("value");

    var newNode = context.createNodeForEl("@" + name, oldNode.getAttributes());

    if (value) {
        newNode.appendChild(context.builder.text(value));
    }

    oldNode.moveChildrenTo(newNode);
    oldNode.replaceWith(newNode);
};
