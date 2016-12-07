
function getContainingWidgetNode() {
    if (this.containingWidgetNode !== undefined) {
        return this.containingWidgetNode;
    }

    var curNode = this.el;

    while (true) {
        if (curNode.tagName === '_widget') {
            this.containingWidgetNode = curNode;
            return this.containingWidgetNode;
        }

        curNode = curNode.parentNode;

        if (!curNode) {
            break;
        }
    }

    this.containingWidgetNode = null;

    return null;
}

module.exports = getContainingWidgetNode;