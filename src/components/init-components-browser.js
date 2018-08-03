"use strict";
var warp10Finalize = require("warp10/finalize");
var eventDelegation = require("./event-delegation");
var win = window;
var defaultDocument = document;
var createFragmentNode = require("../morphdom/fragment").___createFragmentNode;
var componentsUtil = require("./util");
var componentLookup = componentsUtil.___componentLookup;
var ComponentDef = require("./ComponentDef");
var registry = require("./registry");
var serverRenderedGlobals = {};
var serverComponentRootNodes = {};
var keyedElementsByComponentId = {};

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var FLAG_HAS_BODY_EL = 2;
var FLAG_HAS_HEAD_EL = 4;

function indexServerComponentBoundaries(node, stack) {
    var componentId;
    var ownerId;
    var ownerComponent;
    var keyedElements;
    var nextSibling;
    stack = stack || [];

    node = node.firstChild;
    while (node) {
        nextSibling = node.nextSibling;
        if (node.nodeType === 8) {
            // Comment node
            var commentValue = node.nodeValue;
            if (commentValue[0] === "M") {
                var firstChar = commentValue[1];

                if (firstChar === "^" || firstChar === "#") {
                    stack.push(node);
                } else if (firstChar === "/") {
                    var endNode = node;
                    var startNode = stack.pop();
                    var rootNode = createFragmentNode(
                        startNode.nextSibling,
                        endNode
                    );

                    startNode.parentNode.removeChild(startNode);
                    endNode.parentNode.removeChild(endNode);

                    componentId = startNode.nodeValue.substring(2);
                    firstChar = startNode.nodeValue[1];

                    if (firstChar === "^") {
                        var parts = componentId.split(/ /g);
                        var key = parts[2];
                        ownerId = parts[1];
                        componentId = parts[0];
                        if ((ownerComponent = componentLookup[ownerId])) {
                            keyedElements = ownerComponent.___keyedElements;
                        } else {
                            keyedElements =
                                keyedElementsByComponentId[ownerId] ||
                                (keyedElementsByComponentId[ownerId] = {});
                        }
                        if (/\[\]$/.test(key)) {
                            var repeatedElementsForKey = (keyedElements[key] =
                                keyedElements[key] || {});
                            repeatedElementsForKey[componentId] = rootNode;
                        } else {
                            keyedElements[key] = rootNode;
                        }
                    }

                    serverComponentRootNodes[componentId] = rootNode;
                }
            }
        } else if (node.nodeType === 1) {
            // HTML element node
            var markoKey = node.getAttribute("data-marko-key");
            var markoProps = node.getAttribute("data-marko");
            if (markoKey) {
                var separatorIndex = markoKey.indexOf(" ");
                ownerId = markoKey.substring(separatorIndex + 1);
                markoKey = markoKey.substring(0, separatorIndex);
                if ((ownerComponent = componentLookup[ownerId])) {
                    keyedElements = ownerComponent.___keyedElements;
                } else {
                    keyedElements =
                        keyedElementsByComponentId[ownerId] ||
                        (keyedElementsByComponentId[ownerId] = {});
                }
                keyedElements[markoKey] = node;
            }
            if (markoProps) {
                markoProps = JSON.parse(markoProps);
                Object.keys(markoProps).forEach(function(key) {
                    if (key.slice(0, 2) === "on") {
                        eventDelegation.___addDelegatedEventHandler(
                            key.slice(2)
                        );
                    }
                });
            }
            indexServerComponentBoundaries(node, stack);
        }

        node = nextSibling;
    }
}

function invokeComponentEventHandler(component, targetMethodName, args) {
    var method = component[targetMethodName];
    if (!method) {
        throw Error("Method not found: " + targetMethodName);
    }

    method.apply(component, args);
}

function addEventListenerHelper(el, eventType, isOnce, listener) {
    var eventListener = listener;
    if (isOnce) {
        eventListener = function(event) {
            listener(event);
            el.removeEventListener(eventType, eventListener);
        };
    }

    el.addEventListener(eventType, eventListener, false);

    return function remove() {
        el.removeEventListener(eventType, eventListener);
    };
}

function addDOMEventListeners(
    component,
    el,
    eventType,
    targetMethodName,
    isOnce,
    extraArgs,
    handles
) {
    var removeListener = addEventListenerHelper(el, eventType, isOnce, function(
        event
    ) {
        var args = [event, el];
        if (extraArgs) {
            args = extraArgs.concat(args);
        }

        invokeComponentEventHandler(component, targetMethodName, args);
    });
    handles.push(removeListener);
}

function initComponent(componentDef, doc) {
    var component = componentDef.___component;

    if (!component || !component.___isComponent) {
        return; // legacy
    }

    component.___reset();
    component.___document = doc;

    var isExisting = componentDef.___isExisting;
    var id = component.id;

    componentLookup[id] = component;

    if (componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER) {
        component.___rerender(true);
        return;
    }

    if (isExisting) {
        component.___removeDOMEventListeners();
    }

    var domEvents = componentDef.___domEvents;
    if (domEvents) {
        var eventListenerHandles = [];

        domEvents.forEach(function(domEventArgs) {
            // The event mapping is for a direct DOM event (not a custom event and not for bubblign dom events)

            var eventType = domEventArgs[0];
            var targetMethodName = domEventArgs[1];
            var eventEl = component.___keyedElements[domEventArgs[2]];
            var isOnce = domEventArgs[3];
            var extraArgs = domEventArgs[4];

            addDOMEventListeners(
                component,
                eventEl,
                eventType,
                targetMethodName,
                isOnce,
                extraArgs,
                eventListenerHandles
            );
        });

        if (eventListenerHandles.length) {
            component.___domEventListenerHandles = eventListenerHandles;
        }
    }

    if (component.___mounted) {
        component.___emitLifecycleEvent("update");
    } else {
        component.___mounted = true;
        component.___emitLifecycleEvent("mount");
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
    eventDelegation.___init(doc);

    doc = doc || defaultDocument;
    for (var i = componentDefs.length - 1; i >= 0; i--) {
        var componentDef = componentDefs[i];
        initComponent(componentDef, doc);
    }
}

/**
 * This method initializes all components that were rendered on the server by iterating over all
 * of the component IDs.
 */
function initServerRendered(renderedComponents, doc) {
    if (!renderedComponents) {
        renderedComponents = win.$components;

        if (renderedComponents && renderedComponents.forEach) {
            renderedComponents.forEach(function(renderedComponent) {
                initServerRendered(renderedComponent, doc);
            });
        }

        win.$components = {
            concat: initServerRendered
        };

        return;
    }

    doc = doc || defaultDocument;

    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any components
    indexServerComponentBoundaries(doc);
    eventDelegation.___init(doc);

    renderedComponents = warp10Finalize(renderedComponents);

    var componentDefs = renderedComponents.w;
    var typesArray = renderedComponents.t;
    var globals = window.$MG;
    if (globals) {
        serverRenderedGlobals = warp10Finalize(globals);
        delete window.$MG;
    }

    componentDefs.forEach(function(componentDef) {
        componentDef = ComponentDef.___deserialize(
            componentDef,
            typesArray,
            serverRenderedGlobals,
            registry
        );
        var componentId = componentDef.id;
        var component = componentDef.___component;

        var rootNode;
        var flags = componentDef.___flags;
        if ((flags & 6) === 6) {
            rootNode = createFragmentNode(doc.head);
        } else if (flags & FLAG_HAS_BODY_EL) {
            rootNode = createFragmentNode(doc.body);
        } else if (flags & FLAG_HAS_HEAD_EL) {
            rootNode = createFragmentNode(doc.head, doc.body);
        } else {
            rootNode = serverComponentRootNodes[componentId];
            delete serverComponentRootNodes[componentId];
        }

        component.___rootNode = rootNode;
        rootNode.___markoComponent = component;
        component.___keyedElements =
            keyedElementsByComponentId[componentId] || {};

        delete keyedElementsByComponentId[componentId];

        initComponent(componentDef, doc || defaultDocument);
    });
}

exports.___initClientRendered = initClientRendered;
exports.___initServerRendered = initServerRendered;
