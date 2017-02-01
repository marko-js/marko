'use strict';
var nextRepeatedId = require('./nextRepeatedId');
var repeatedRegExp = /\[\]$/;
var nextWidgetId = require('./util').$__nextWidgetId;
var extend = require('raptor-util/extend');
var registry = require('./registry');

/**
 * A WidgetDef is used to hold the metadata collected at runtime for
 * a single widget and this information is used to instantiate the widget
 * later (after the rendered HTML has been added to the DOM)
 */
function WidgetDef(widget, widgetId, out, widgetStack, widgetStackLen) {
    this.$__out = out; // The AsyncWriter that this widget is associated with
    this.$__widgetStack = widgetStack;
    this.$__widgetStackLen = widgetStackLen;
    this.$__widget = widget;
    this.id = widgetId;

    this.$__scope =         // The ID of the widget that this widget is scoped within
        this.$__customEvents =  // An array containing information about custom events
        this.$__roots =         // IDs of root elements if there are multiple root elements
        this.$__children = // An array of nested WidgetDef instances
        this.$__domEvents = // An array of DOM events that need to be added (in sets of three)
        undefined;

    this.$__isExisting = false;

    this.$__nextIdIndex = 0; // The unique integer to use for the next scoped ID
}

WidgetDef.prototype = {
    $__end: function() {
        this.$__widgetStack.length = this.$__widgetStackLen;
    },

    /**
     * Register a nested widget for this widget. We maintain a tree of widgets
     * so that we can instantiate nested widgets before their parents.
     */
    $__addChild: function (widgetDef) {
        var children = this.$__children;

        if (children) {
            children.push(widgetDef);
        } else {
            this.$__children = [widgetDef];
        }
    },
    /**
     * This helper method generates a unique and fully qualified DOM element ID
     * that is unique within the scope of the current widget. This method prefixes
     * the the nestedId with the ID of the current widget. If nestedId ends
     * with `[]` then it is treated as a repeated ID and we will generate
     * an ID with the current index for the current nestedId.
     * (e.g. "myParentId-foo[0]", "myParentId-foo[1]", etc.)
     */
    elId: function (nestedId) {
        if (nestedId == null) {
            return this.id;
        } else {
            if (typeof nestedId === 'string' && repeatedRegExp.test(nestedId)) {
                return nextRepeatedId(this.$__out, this.id, nestedId);
            } else {
                return this.id + '-' + nestedId;
            }
        }
    },
    /**
     * Registers a DOM event for a nested HTML element associated with the
     * widget. This is only done for non-bubbling events that require
     * direct event listeners to be added.
     * @param  {String} type The DOM event type ("mouseover", "mousemove", etc.)
     * @param  {String} targetMethod The name of the method to invoke on the scoped widget
     * @param  {String} elId The DOM element ID of the DOM element that the event listener needs to be added too
     */
     e: function(type, targetMethod, elId, extraArgs) {
        if (!targetMethod) {
            // The event handler method is allowed to be conditional. At render time if the target
            // method is null then we do not attach any direct event listeners.
            return;
        }

        var domEvents = this.$__domEvents;
        this.$__domEvents = (domEvents || (this.$__domEvents = [])).concat([
            type,
            targetMethod,
            elId,
            extraArgs]);
    },
    /**
     * Returns the next auto generated unique ID for a nested DOM element or nested DOM widget
     */
    $__nextId: function() {
        return this.id ?
            this.id + '-w' + (this.$__nextIdIndex++) :
            nextWidgetId(this.$__out);
    }
};

WidgetDef.$__deserialize = function(o, types) {
    var id        = o[0];
    var typeName  = types[o[1]];
    var input     = o[2];
    var extra     = o[3];

    var state = extra.s;
    var widgetProps = extra.w;

    var widget = typeName /* legacy */ && registry.$__createWidget(typeName, id);

    // Preview newly created widget from being queued for update since we are
    // just building it from the server info
    widget.$__updateQueued = true;

    if (state) {
        // We go through the setter here so that we convert the state object
        // to an instance of `State`
        widget.state = state;
    }

    widget.$__input = input;

    if (widgetProps) {
        extend(widget, widgetProps);
    }

    return {
        $__widget: widget,
        $__roots: extra.r,
        $__scope: extra.p,
        $__domEvents: extra.d,
        $__customEvents: extra.e
    };
};

module.exports = WidgetDef;