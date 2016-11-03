var events = require('./events');
var dom = require('./dom');

function checkAddedToDOM(asyncStream, method) {
    if (!asyncStream.data._added) {
        throw new Error('Cannot call ' + method + '() until after HTML fragment is added to DOM.');
    }
}

function getWidgetDefs(asyncStream) {
    var widgetDefs = asyncStream.data.widgets;

    if (!widgetDefs || widgetDefs.length === 0) {
        throw new Error('No widget rendered');
    }
    return widgetDefs;
}

module.exports = {
    getWidget: function() {
        checkAddedToDOM(this, 'getWidget');

        var rerenderWidget = this.global.__rerenderWidget;
        if (rerenderWidget) {
            return rerenderWidget;
        }

        return getWidgetDefs(this)[0].widget;
    },
    getWidgets: function(selector) {
        checkAddedToDOM(this, 'getWidgets');

        var widgetDefs = getWidgetDefs(this);

        var widgets;
        var i;
        if (selector) {
            // use the selector to find the widgets that the caller wants
            widgets = [];
            for (i = 0; i < widgetDefs.length; i++) {
                var widget = widgetDefs[i].widget;
                if (selector(widget)) {
                    widgets.push(widget);
                }
            }
        } else {
            // return all widgets
            widgets = new Array(widgetDefs.length);
            for (i = 0; i < widgetDefs.length; i++) {
                widgets[i] = widgetDefs[i].widget;
            }
        }
        return widgets;
    },

    afterInsert: function(node) {
        var data = this.data;
        data._added = true;

        var widgetsContext = this.global.widgets;
        var widgetDefs = widgetsContext ? widgetsContext.widgets : null;

        data.widgets = widgetDefs;

        events.emit('mountNode', {
            node: node,
            out: this,
            document: node.ownerDocument
        });    // NOTE: This will trigger widgets to be initialized if there were any

        return this;
    },

    appendTo: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.appendTo(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    replace: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.replace(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    replaceChildrenOf: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.replaceChildrenOf(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    insertBefore: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.insertBefore(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    insertAfter: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.insertAfter(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    prependTo: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.prependTo(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    document: typeof document !== 'undefined' && document
};