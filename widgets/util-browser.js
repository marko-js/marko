var widgetLookup = {};

var defaultDocument = document;

function getWidgetForEl(el, doc) {
    if (el) {
        var node = typeof el === 'string' ? (doc || defaultDocument).getElementById(el) : el;
        if (node) {
            var widget = node._w;

            while(widget) {
                var rootFor = widget.$__rootFor;
                if (rootFor)  {
                    widget = rootFor;
                } else {
                    break;
                }
            }

            return widget;
        }
    }
}

var lifecycleEventMethods = {};

[
    'create',
    'render',
    'update',
    'mount',
    'destroy',
].forEach(function(eventName) {
    lifecycleEventMethods[eventName] = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
});

/**
 * This method handles invoking a widget's event handler method
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
function emitLifecycleEvent(widget, eventType, eventArg) {
    var listenerMethod = widget[lifecycleEventMethods[eventType]];

    if (listenerMethod) {
        listenerMethod.call(widget, eventArg);
    }

    widget.emit(eventType, eventArg);
}

function destroyWidgetForEl(el) {
    var widgetToDestroy = el._w;
    if (widgetToDestroy) {
        widgetToDestroy.$__destroyShallow();
        el._w = null;

        while ((widgetToDestroy = widgetToDestroy.$__rootFor)) {
            widgetToDestroy.$__rootFor = null;
            widgetToDestroy.$__destroyShallow();
        }
    }
}
function destroyElRecursive(el) {
    var curChild = el.firstChild;
    while(curChild) {
        if (curChild.nodeType == 1) {
            destroyWidgetForEl(curChild);
            destroyElRecursive(curChild);
        }
        curChild = curChild.nextSibling;
    }
}

var nextUniqueId = 0;

function nextWidgetId() {
    return 'wc' + (nextUniqueId++);
}

function getElementById(doc, id) {
    return doc.getElementById(id);
}

exports.$__widgetLookup = widgetLookup;
exports.$__getWidgetForEl = getWidgetForEl;
exports.$__emitLifecycleEvent = emitLifecycleEvent;
exports.$__destroyWidgetForEl = destroyWidgetForEl;
exports.$__destroyElRecursive = destroyElRecursive;
exports.$__nextWidgetId = nextWidgetId;
exports.$__getElementById = getElementById;