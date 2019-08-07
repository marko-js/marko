const CONTROL_FLOW_TAGS = ["for", "if", "else", "else-if", "while"];
module.exports = function findNonControlFlowParent(el) {
    const parent = el.parentNode;
    if (
        parent.type === "HtmlElement" &&
        !CONTROL_FLOW_TAGS.includes(parent.tagName)
    ) {
        return parent;
    } else if (parent.parentNode) {
        return findNonControlFlowParent(parent.parentNode);
    }
};
