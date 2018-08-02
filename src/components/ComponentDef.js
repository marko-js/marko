"use strict";
var repeatedRegExp = /\[\]$/;
var componentUtil = require("./util");
var attachBubblingEvent = componentUtil.___attachBubblingEvent;
var addDelegatedEventHandler = require("./event-delegation")
    .___addDelegatedEventHandler;
var extend = require("raptor-util/extend");
var KeySequence = require("./KeySequence");

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
/*
var FLAG_HAS_BODY_EL = 2;
var FLAG_HAS_HEAD_EL = 4;
*/

/**
 * A ComponentDef is used to hold the metadata collected at runtime for
 * a single component and this information is used to instantiate the component
 * later (after the rendered HTML has been added to the DOM)
 */
function ComponentDef(component, componentId, globalComponentsContext) {
    this.___globalComponentsContext = globalComponentsContext; // The AsyncWriter that this component is associated with
    this.___component = component;
    this.id = componentId;

    this.___domEvents = undefined; // An array of DOM events that need to be added (in sets of three)

    this.___isExisting = false;

    this.___renderBoundary = false;
    this.___flags = 0;

    this.___nextIdIndex = 0; // The unique integer to use for the next scoped ID

    this.___keySequence = null;

    this.___preservedDOMNodes = null;
}

ComponentDef.prototype = {
    ___nextKey: function(key) {
        var keySequence =
            this.___keySequence || (this.___keySequence = new KeySequence());
        return keySequence.___nextKey(key);
    },

    ___preserveDOMNode: function(key, bodyOnly) {
        var lookup =
            this.___preservedDOMNodes || (this.___preservedDOMNodes = {});
        lookup[key] = bodyOnly ? 2 : 1;
    },

    /**
     * This helper method generates a unique and fully qualified DOM element ID
     * that is unique within the scope of the current component. This method prefixes
     * the the nestedId with the ID of the current component. If nestedId ends
     * with `[]` then it is treated as a repeated ID and we will generate
     * an ID with the current index for the current nestedId.
     * (e.g. "myParentId-foo[0]", "myParentId-foo[1]", etc.)
     */
    elId: function(nestedId) {
        var id = this.id;
        if (nestedId == null) {
            return id;
        } else {
            if (typeof nestedId == "string" && repeatedRegExp.test(nestedId)) {
                return this.___globalComponentsContext.___nextRepeatedId(
                    id,
                    nestedId
                );
            } else {
                return id + "-" + nestedId;
            }
        }
    },
    /**
     * Returns the next auto generated unique ID for a nested DOM element or nested DOM component
     */
    ___nextComponentId: function() {
        return this.id + "-c" + this.___nextIdIndex++;
    },

    d: function(eventName, handlerMethodName, isOnce, extraArgs) {
        addDelegatedEventHandler(eventName);
        return attachBubblingEvent(this, handlerMethodName, isOnce, extraArgs);
    },

    get ___type() {
        return this.___component.___type;
    }
};

ComponentDef.___deserialize = function(o, types, global, registry) {
    var id = o[0];
    var typeName = types[o[1]];
    var input = o[2];
    var extra = o[3];

    var isLegacy = extra.l;
    var state = extra.s;
    var componentProps = extra.w;
    var flags = extra.f;

    var component =
        typeName /* legacy */ &&
        registry.___createComponent(typeName, id, isLegacy);

    // Prevent newly created component from being queued for update since we area
    // just building it from the server info
    component.___updateQueued = true;

    if (flags & FLAG_WILL_RERENDER_IN_BROWSER) {
        if (component.onCreate) {
            component.onCreate(input, { global: global });
        }
        if (component.onInput) {
            input = component.onInput(input, { global: global }) || input;
        }
    } else {
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

        if (componentProps) {
            extend(component, componentProps);
        }
    }

    component.___input = input;

    if (extra.b) {
        component.___bubblingDomEvents = extra.b;
    }

    var scope = extra.p;
    var customEvents = extra.e;
    if (customEvents) {
        component.___setCustomEvents(customEvents, scope);
    }

    component.___global = global;

    return {
        id: id,
        ___component: component,
        ___boundary: extra.r,
        ___domEvents: extra.d,
        ___flags: extra.f || 0
    };
};

module.exports = ComponentDef;
