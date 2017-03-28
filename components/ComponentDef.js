'use strict';
var nextRepeatedId = require('./nextRepeatedId');
var repeatedRegExp = /\[\]$/;
var componentUtil = require('./util');
var nextComponentId = componentUtil.$__nextComponentId;
var attachBubblingEvent = componentUtil.$__attachBubblingEvent;

var extend = require('raptor-util/extend');
var registry = require('./registry');

/**
 * A ComponentDef is used to hold the metadata collected at runtime for
 * a single component and this information is used to instantiate the component
 * later (after the rendered HTML has been added to the DOM)
 */
function ComponentDef(component, componentId, out, componentStack, componentStackLen) {
    this.$__out = out; // The AsyncWriter that this component is associated with
    this.$__componentStack = componentStack;
    this.$__componentStackLen = componentStackLen;
    this.$__component = component;
    this.id = componentId;

    this.$__roots =  null;            // IDs of root elements if there are multiple root elements
    this.$__children = null;          // An array of nested ComponentDef instances
    this.$__domEvents = null;         // An array of DOM events that need to be added (in sets of three)
    this.$__bubblingDomEvents = null; // Used to keep track of bubbling DOM events for components rendered on the server

    this.$__isExisting = false;

    this.$__nextIdIndex = 0; // The unique integer to use for the next scoped ID
}

ComponentDef.prototype = {
    $__end: function() {
        this.$__componentStack.length = this.$__componentStackLen;
    },

    /**
     * Register a nested component for this component. We maintain a tree of components
     * so that we can instantiate nested components before their parents.
     */
    $__addChild: function (componentDef) {
        var children = this.$__children;

        if (children) {
            children.push(componentDef);
        } else {
            this.$__children = [componentDef];
        }
    },
    /**
     * This helper method generates a unique and fully qualified DOM element ID
     * that is unique within the scope of the current component. This method prefixes
     * the the nestedId with the ID of the current component. If nestedId ends
     * with `[]` then it is treated as a repeated ID and we will generate
     * an ID with the current index for the current nestedId.
     * (e.g. "myParentId-foo[0]", "myParentId-foo[1]", etc.)
     */
    elId: function (nestedId) {
        var id = this.id;
        if (nestedId == null) {
            return id;
        } else {
            if (typeof nestedId == 'string' && repeatedRegExp.test(nestedId)) {
                return nextRepeatedId(this.$__out, id, nestedId);
            } else {
                return id + '-' + nestedId;
            }
        }
    },
    /**
     * Registers a DOM event for a nested HTML element associated with the
     * component. This is only done for non-bubbling events that require
     * direct event listeners to be added.
     * @param  {String} type The DOM event type ("mouseover", "mousemove", etc.)
     * @param  {String} targetMethod The name of the method to invoke on the scoped component
     * @param  {String} elId The DOM element ID of the DOM element that the event listener needs to be added too
     */
     e: function(type, targetMethod, elId, extraArgs) {
        if (targetMethod) {
            // The event handler method is allowed to be conditional. At render time if the target
            // method is null then we do not attach any direct event listeners.
            (this.$__domEvents || (this.$__domEvents = [])).push([
                type,
                targetMethod,
                elId,
                extraArgs]);
        }
    },
    /**
     * Returns the next auto generated unique ID for a nested DOM element or nested DOM component
     */
    $__nextId: function() {
        var id = this.id;

        return id ?
            id + '-c' + (this.$__nextIdIndex++) :
            nextComponentId(this.$__out);
    },

    d: function(handlerMethodName, extraArgs) {
        return attachBubblingEvent(this, handlerMethodName, extraArgs);
    }
};

ComponentDef.$__deserialize = function(o, types) {
    var id        = o[0];
    var typeName  = types[o[1]];
    var input     = o[2];
    var extra     = o[3];

    var state = extra.s;
    var componentProps = extra.w;

    var component = typeName /* legacy */ && registry.$__createComponent(typeName, id);

    if (extra.b) {
        component.$__bubblingDomEvents = extra.b;
    }

    // Preview newly created component from being queued for update since we area
    // just building it from the server info
    component.$__updateQueued = true;

    if (state) {
        var undefinedPropNames = extra.u;
        if (undefinedPropNames) {
            undefinedPropNames.forEach(function(undefinedPropName) {
                state[undefinedPropName] = undefined;
            });
        }
        // We go through the setter here so that we convert the state object
        // to an instance of `State`
        component.state = state;
    }

    component.$__input = input;

    if (componentProps) {
        extend(component, componentProps);
    }

    var scope = extra.p;
    var customEvents = extra.e;
    if (customEvents) {
        component.$__setCustomEvents(customEvents, scope);
    }

    return {
        $__component: component,
        $__roots: extra.r,
        $__domEvents: extra.d
    };
};

module.exports = ComponentDef;
