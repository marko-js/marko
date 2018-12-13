module.exports = function addIdScopedAttr(context, el, attrValue) {
    const templateRoot = el.parentNode;
    const walker = context.createWalker({
        enter(node) {
            if (node.hasAttribute) {
                if (
                    node.hasAttribute("key") &&
                    node.getAttributeValue("key").value == attrValue.value
                ) {
                    node.setAttributeValue("id:scoped", attrValue);
                }
            }
        }
    });
    walker.walk(templateRoot);
};
