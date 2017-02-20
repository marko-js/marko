'use strict';
var warp10Finalize = require('warp10/finalize');
var eventDelegation = require('./event-delegation');
var win = window;
var defaultDocument = document;
var events = require('../runtime/events');
var componentsUtil = require('./util');
var componentLookup = componentsUtil.$__componentLookup;
var getElementById = componentsUtil.$__getElementById;
var ComponentDef = require('./ComponentDef');
// var extend = require('raptor-util/extend');
// var registry = require('./registry');

function invokeComponentEventHandler(component, targetMethodName, args) {
    var method = component[targetMethodName];
    if (!method) {
        throw Error('Method not found: ' + targetMethodName);
    }

    method.apply(component, args);
}

function addEventListenerHelper(el, eventType, listener) {
    el.addEventListener(eventType, listener, false);
    return function remove() {
        el.removeEventListener(eventType, listener);
    };
}

function addDOMEventListeners(component, el, eventType, targetMethodName, extraArgs, handles) {
    var removeListener = addEventListenerHelper(el, eventType, function(event) {
        var args = [event, el];
        if (extraArgs) {
            args = extraArgs.concat(args);
        }

        invokeComponentEventHandler(component, targetMethodName, args);
    });
    handles.push(removeListener);
}

function initComponent(componentDef, doc) {
    var component = componentDef.$__component;

    if (!component || !component.$__isComponent) {
        return; // legacy
    }

    var scope = componentDef.$__scope;
    var domEvents = componentDef.$__domEvents;
    var customEvents = componentDef.$__customEvents;

    component.$__reset();
    component.$__document = doc;

    var isExisting = componentDef.$__isExisting;
    var i;
    var len;
    var eventType;
    var targetMethodName;
    var extraArgs;
    var id = component.id;

    var rootIds = componentDef.$__roots;

    if (rootIds) {
        var rootComponents;

        var els = [];
        for (i=0, len=rootIds.length; i<len; i++) {
            var rootId = rootIds[i];
            var nestedId = id + '-' + rootId;
            var rootComponent = componentLookup[nestedId];
            if (rootComponent) {
                rootComponent.$__rootFor = component;
                if (rootComponents) {
                    rootComponents.push(rootComponent);
                } else {
                    rootComponents = component.$__rootComponents = [rootComponent];
                }
            } else {
                var rootEl = getElementById(doc, nestedId);
                if (rootEl) {
                    rootEl._w = component;
                    els.push(rootEl);
                }
            }
        }

        component.el = els[0];
        component.els = els;
        componentLookup[id] = component;
    } else if (!isExisting) {
        var el = getElementById(doc, id);
        el._w = component;
        component.el = el;
        component.els = [el];
        componentLookup[id] = component;
    }

    if (isExisting) {
        component.$__removeDOMEventListeners();
    }

    if (domEvents) {
        var eventListenerHandles = [];

        for (i=0, len=domEvents.length; i<len; i+=4) {
            eventType = domEvents[i];
            targetMethodName = domEvents[i+1];
            var eventEl = getElementById(doc, domEvents[i+2]);
            extraArgs = domEvents[i+3];

            // The event mapping is for a DOM event (not a custom event)
            addDOMEventListeners(component, eventEl, eventType, targetMethodName, extraArgs, eventListenerHandles);
        }

        if (eventListenerHandles.length) {
            component.$__domEventListenerHandles = eventListenerHandles;
        }
    }

    if (customEvents) {
        component.$__customEvents = {};
        component.$__scope = scope;

        for (i=0, len=customEvents.length; i<len; i+=3) {
            eventType = customEvents[i];
            targetMethodName = customEvents[i+1];
            extraArgs = customEvents[i+2];

            component.$__customEvents[eventType] = [targetMethodName, extraArgs];
        }
    }

    if (isExisting) {
        component.$__emitLifecycleEvent('update');
    } else {
        events.emit('mountComponent', component);
        component.$__emitLifecycleEvent('mount');
    }
}

/**
 * This method is used to initialized components associated with UI components
 * rendered in the browser. While rendering UI components a "components context"
 * is added to the rendering context to keep up with which components are rendered.
 * When ready, the components can then be initialized by walking the component tree
 * in the components context (nested components are initialized before ancestor components).
 * @param  {Array<marko-components/lib/ComponentDef>} componentDefs An array of ComponentDef instances
 */
function initClientRendered(componentDefs, doc) {
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any components
    eventDelegation.$__init(doc);

    doc = doc || defaultDocument;
    for (var i=0,len=componentDefs.length; i<len; i++) {
        var componentDef = componentDefs[i];

        if (componentDef.$__children) {
            initClientRendered(componentDef.$__children, doc);
        }

        initComponent(
            componentDef,
            doc);
    }
}

/**
 * This method initializes all components that were rendered on the server by iterating over all
 * of the component IDs.
 */
function initServerRendered(renderedComponents, doc) {
    var i=0, len;
    if (!arguments.length) {
        renderedComponents = win.$components;

        win.$components = {
            concat: initServerRendered
        };

        if (renderedComponents && (len=renderedComponents.length)) {
            for (; i<len; i++) {
                initServerRendered(renderedComponents[i], doc);
            }
        }
        return;
    }
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any components
    eventDelegation.$__init(doc || defaultDocument);

    renderedComponents = warp10Finalize(renderedComponents);

    var componentDefs = renderedComponents.w;
    var typesArray = renderedComponents.t;

    if (!doc) {
        doc = defaultDocument;
    }

    for (len=componentDefs.length; i<len; i++) {
        var componentDef = ComponentDef.$__deserialize(componentDefs[i], typesArray);
        initComponent(componentDef, doc);
    }
}

exports.$__initClientRendered = initClientRendered;
exports.$__initServerRendered = initServerRendered;