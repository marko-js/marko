var events = require('./events');
var domInsert = require('./dom-insert');

function checkAddedToDOM(result, method) {
    if (!result.out.data._added) {
        throw new Error('Cannot call ' + method + '() until after HTML fragment is added to DOM.');
    }
}

function getWidgetDefs(result) {
    var widgetDefs = result.out.data.widgets;

    if (!widgetDefs || widgetDefs.length === 0) {
        throw new Error('No widget rendered');
    }
    return widgetDefs;
}

function RenderResult(out) {
   this.out = out;
}

module.exports = RenderResult;

var proto = RenderResult.prototype = {
    getWidget: function() {
        checkAddedToDOM(this, 'getWidget');

        var rerenderWidget = this.out.global.__rerenderWidget;
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

    afterInsert: function(doc) {
        var data = this.out.data;
        data._added = true;

        var widgetsContext = this.out.global.widgets;
        var widgetDefs = widgetsContext ? widgetsContext.widgets : null;

        data.widgets = widgetDefs;

        events.emit('mountNode', {
            result: this,
            out: this.out,
            document: doc
        });    // NOTE: This will trigger widgets to be initialized if there were any

        return this;
    },
    getNode: function(doc) {
        return this.out.getNode(doc);
    },
    getOutput: function() {
        return this.out.getOutput();
    },
    toString: function() {
        return this.out.toString();
    },
    toJSON: function() {
        return this.getOutput();
    },
    document: typeof document !== 'undefined' && document
};

// Add all of the following DOM methods to Widget.prototype:
// - appendTo(referenceEl)
// - replace(referenceEl)
// - replaceChildrenOf(referenceEl)
// - insertBefore(referenceEl)
// - insertAfter(referenceEl)
// - prependTo(referenceEl)
domInsert(
    proto,
    function getEl(renderResult, referenceEl) {
        return renderResult.getNode(referenceEl.ownerDocument);
    },
    function afterInsert(renderResult, referenceEl) {
        return renderResult.afterInsert(referenceEl.ownerDocument);
    });