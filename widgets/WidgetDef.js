'use strict';
var repeatedId = require('./repeated-id');
var repeatedRegExp = /\[\]$/;
var uniqueId = require('./uniqueId');

/**
 * A WidgetDef is used to hold the metadata collected at runtime for
 * a single widget and this information is used to instantiate the widget
 * later (after the rendered HTML has been added to the DOM)
 */
function WidgetDef(id, out, widgetStack, widgetStackLen) {
    this.id = id;
    this.$__out = out; // The AsyncWriter that this widget is associated with
    this.$__widgetStack = widgetStack;
    this.$__widgetStackLen = widgetStackLen;

    this.$__type =              // The widget module type name that is passed to the factory
        this.$__config =        // Widget config object (may be null)
        this.$__state =         // Widget state object (may be null)
        this.$__scope =         // The ID of the widget that this widget is scoped within
        this.$__customEvents =  // An array containing information about custom events
        this.$__bodyElId =      // The ID for the default body element (if any any)
        this.$__roots =         // IDs of root elements if there are multiple root elements
        this.body =
        this.$__existingWidget =
        this.$__children = // An array of nested WidgetDef instances
        this.$__domEvents = // An array of DOM events that need to be added (in sets of three)
        this.widget = // This is used by RenderResult to reference the associated widget instance after creation
        null;

    this.$__nextIdIndex = 0; // The unique integer to use for the next scoped ID
}

WidgetDef.prototype = {
    $__end: function() {
        this.$__widgetStack.length = this.$__widgetStackLen;
    },

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

    $__toJSON: function(typeIndex) {
        var customEvents = this.$__customEvents;
        var extra = {
            p: customEvents && this.$__scope, // Only serialize scope if we need to attach custom events
            e: this.$__domEvents,
            ce: this.$__customEvents,
            b: this.$__bodyElId,
            c: this.$__config
        };

        var result = [
            this.id,        // 0 = id
            typeIndex,   // 1 = type
            this.$__roots,  // 2 = root el ids
            this.$__state,  // 3 = state
            extra           // 4
        ];
        return result;
    }
};

WidgetDef.$__deserialize = function(o, types) {
    var extra = o[4];
    var typeIndex = o[1];

    return {
        id: o[0],
        $__type: types[typeIndex],
        $__roots: o[2],
        $__state: o[3],
        $__scope: extra.p,
        $__domEvents: extra.e,
        $__customEvents: extra.ce,
        $__bodyElId: extra.b,
        $__config: extra.c
    };
};

module.exports = WidgetDef;