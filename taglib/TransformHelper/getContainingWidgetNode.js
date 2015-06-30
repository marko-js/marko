function getContainingWidgetNode(options) {

    var allowExtend = options && options.allowExtend === true;

    if (this.containingWidgetNode !== undefined) {
        return this.containingWidgetNode;
    }

    if (allowExtend && this.containingWidgetExtendNode !== undefined) {
        return this.containingWidgetExtendNode;
    }

    var curNode = this.node;

    while (true) {
        if (curNode.qName === 'w-widget') {
            this.containingWidgetNode = curNode;
            return this.containingWidgetNode;
        } else if (allowExtend && curNode.data.widgetExtend) {
            this.containingWidgetExtendNode = curNode;
            return this.containingWidgetExtendNode;
        }

        curNode = curNode.parentNode;

        if (!curNode) {
            break;
        }
    }

    this.containingWidgetNode = null;
    this.containingWidgetExtendNode = null;

    return null;
}

module.exports = getContainingWidgetNode;