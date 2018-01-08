
var markoUID = window.$MUID || (window.$MUID = { i: 0 });
var runtimeId = markoUID.i++;

var componentLookup = {};

var defaultDocument = document;
var EMPTY_OBJECT = {};

function getComponentForEl(el, doc) {
    if (el) {
        var node = typeof el == 'string' ? (doc || defaultDocument).getElementById(el) : el;
        if (node) {
            return node.___markoComponent;
        }
    }
}

var lifecycleEventMethods = {};

[
    'create',
    'render',
    'update',
    'mount',
    'destroy'
].forEach(function(eventName) {
    lifecycleEventMethods[eventName] = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
});

/**
 * This method handles invoking a component's event handler method
 * (if present) while also emitting the event through
 * the standard EventEmitter.prototype.emit method.
 *
 * Special events and their corresponding handler methods
 * include the following:
 *
 * beforeDestroy --> onBeforeDestroy
 * destroy       --> onDestroy
 * beforeUpdate  --> onBeforeUpdate
 * update        --> onUpdate
 * render        --> onRender
 */
function emitLifecycleEvent(component, eventType, eventArg1, eventArg2) {
    var listenerMethod = component[lifecycleEventMethods[eventType]];

    if (listenerMethod !== undefined) {
        listenerMethod.call(component, eventArg1, eventArg2);
    }

    component.emit(eventType, eventArg1, eventArg2);
}

function destroyComponentForNode(node) {
    var componentToDestroy = node.___markoComponent;
    if (componentToDestroy) {
        componentToDestroy.___destroyShallow();
        delete componentLookup[componentToDestroy.id];
    }
}
function destroyNodeRecursive(node, component) {
    if (node.nodeType === 1) {
        var key;

        if (component && (key = node.___markoKey)) {
            if (node === component.___keyedElements[key]) {
                delete component.___keyedElements[key];
            }
        }

        var curChild = node.firstChild;
        while(curChild) {
            destroyComponentForNode(curChild);
            destroyNodeRecursive(curChild, component);
            curChild = curChild.nextSibling;
        }
    }
}

function nextComponentId() {
    // Each component will get an ID that is unique across all loaded
    // marko runtimes. This allows multiple instances of marko to be
    // loaded in the same window and they should all place nice
    // together
    return 'b' + (markoUID.i++);
}

function nextComponentIdProvider() {
    return nextComponentId;
}

function attachBubblingEvent(componentDef, handlerMethodName, extraArgs) {
    if (handlerMethodName) {
        var componentId = componentDef.id;
        if (extraArgs) {
            return [handlerMethodName, componentId, extraArgs];
        } else {
            return [handlerMethodName, componentId];
        }
    }
}

function getMarkoPropsFromEl(el) {
    var vElement = el.___markoVElement;
    var virtualProps;

    if (vElement) {
        virtualProps = vElement.___properties;
    } else {
        virtualProps = el.___markoVProps;
        if (!virtualProps) {
            virtualProps = el.getAttribute('data-marko');
            el.___markoVProps = virtualProps = virtualProps ? JSON.parse(virtualProps) : EMPTY_OBJECT;
        }
    }

    return virtualProps;
}

exports.___runtimeId = runtimeId;
exports.___componentLookup = componentLookup;
exports.___getComponentForEl = getComponentForEl;
exports.___emitLifecycleEvent = emitLifecycleEvent;
exports.___destroyComponentForNode = destroyComponentForNode;
exports.___destroyNodeRecursive = destroyNodeRecursive;
exports.___nextComponentIdProvider = nextComponentIdProvider;
exports.___attachBubblingEvent = attachBubblingEvent;
exports.___getMarkoPropsFromEl = getMarkoPropsFromEl;
