module.exports = function findBoundParent(el) {
    if (el.type === "HtmlElement" && el.getAttribute("w-bind")) {
        return el;
    } else if (el.parentNode) {
        return findBoundParent(el.parentNode);
    }
};
