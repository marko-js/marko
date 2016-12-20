'use strict';
var repeatedId = require('./repeated-id');
var repeatedRegExp = /\[\]$/;
var uniqueId = require('./uniqueId');

/**
 * A WidgetDef is used to hold the metadata collected at runtime for
 * a single widget and this information is used to instantiate the widget
 * later (after the rendered HTML has been added to the DOM)
 */
function WidgetDef(config, endFunc, out) {
    this.$__type = config.$__type; // The widget module type name that is passed to the factory
    this.id = config.id; // The unique ID of the widget
    this.$__config = config.$__config; // Widget config object (may be null)
    this.$__state = config.$__state; // Widget state object (may be null)
    this.$__scope = config.$__scope; // The ID of the widget that this widget is scoped within
    this.$__customEvents = config.$__customEvents; // An array containing information about custom events
    this.bodyElId = config.bodyElId; // The ID for the default body element (if any any)
    this.$__roots = config.$__roots;
    this.body = config.body;
    this.$__existingWidget = config.$__existingWidget;

    this.$__children = null; // An array of nested WidgetDef instances
    this.$__end = endFunc; // A function that when called will pop this widget def off the stack
    this.$__domEvents = null; // An array of DOM events that need to be added (in sets of three)
    this.$__out = out; // The AsyncWriter that this widget is associated with
    this.$__nextIdIndex = 0; // The unique integer to use for the next scoped ID
    this.widget = null; // This ised by RenderResult to reference the associated widget instance after creation
}

WidgetDef.prototype = {
    t: function(typeName) {
        this.$__type = typeName;
    },

    c: function(config) {
        this.$__config = config;
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
                return repeatedId.$__nextId(this.$__out, this.id, nestedId);
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

        if (!this.$__domEvents) {
            this.$__domEvents = [];
        }
        this.$__domEvents.push(type);
        this.$__domEvents.push(targetMethod);
        this.$__domEvents.push(elId);
        this.$__domEvents.push(extraArgs);
    },
    /**
     * Returns the next auto generated unique ID for a nested DOM element or nested DOM widget
     */
    $__nextId: function() {
        return this.id ? this.id + '-w' + (this.$__nextIdIndex++) : uniqueId(this.$__out);
    },

    $__toJSON: function() {
        return  {
            $__type: this.$__type,
            id: this.id,
            $__config: this.$__config,
            $__state: this.$__state,
            $__scope: this.$__scope,
            $__domEvents: this.$__domEvents,
            $__customEvents: this.$__customEvents,
            bodyElId: this.bodyElId,
            $__roots: this.$__roots
        };
    }
};

module.exports = WidgetDef;