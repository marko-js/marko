var widgetLookup = require('./util').$__widgetLookup;
var isArray = Array.isArray;

var listenersAttached;

function getEventAttribute(el, attrName) {
    var virtualAttrs = el._vattrs;

    if (virtualAttrs) {
        return el._vattrs[attrName];
    } else {
        var attrValue = el.getAttribute(attrName);
        if (attrValue) {
            // <method_name> <widget_id>[ <extra_args_index]
            var parts = attrValue.split(' ');
            if (parts.length == 3) {
                parts[2] = parseInt(parts[2], 10);
            }

            return parts;
        }
    }
}

function delegateEvent(node, target, event) {
    var targetMethod = target[0];
    var targetWidgetId = target[1];
    var extraArgs = target[2];

    var targetWidget = widgetLookup[targetWidgetId];


    if (!targetWidget) {
        return;
    }

    var targetFunc = targetWidget[targetMethod];
    if (!targetFunc) {
        throw Error('Method not found: ' + targetMethod);
    }

    if (extraArgs != null) {
        if (typeof extraArgs === 'number') {
            extraArgs = targetWidget.$__bubblingDomEvents[extraArgs];
            if (!isArray(extraArgs)) {
                extraArgs = [extraArgs];
            }
        }
    }

    // Invoke the widget method
    if (extraArgs) {
        targetFunc.apply(targetWidget, extraArgs.concat(event, node));
    } else {
        targetFunc.call(targetWidget, event, node);
    }
}

function attachBubbleEventListeners(doc) {
    var body = doc.body;
    // Here's where we handle event delegation using our own mechanism
    // for delegating events. For each event that we have white-listed
    // as supporting bubble, we will attach a listener to the root
    // document.body element. When we get notified of a triggered event,
    // we again walk up the tree starting at the target associated
    // with the event to find any mappings for event. Each mapping
    // is from a DOM event type to a method of a widget.
    require('./bubble').forEach(function addBubbleHandler(eventType) {
        body.addEventListener(eventType, function(event) {
            var propagationStopped = false;

            // Monkey-patch to fix #97
            var oldStopPropagation = event.stopPropagation;

            event.stopPropagation = function() {
                oldStopPropagation.call(event);
                propagationStopped = true;
            };

            var curNode = event.target;
            if (!curNode) {
                return;
            }

            // Search up the tree looking DOM events mapped to target
            // widget methods
            var attrName = 'data-_on' + eventType;
            var target;

            // Attributes will have the following form:
            // on<event_type>("<target_method>|<widget_id>")

            do {
                if ((target = getEventAttribute(curNode, attrName))) {
                    delegateEvent(curNode, target, event);

                    if (propagationStopped) {
                        break;
                    }
                }
            } while((curNode = curNode.parentNode) && curNode.getAttribute);
        });
    });
}

function noop() {}

exports.$__handleNodeAttach = noop;
exports.$__handleNodeDetach = noop;
exports.$__delegateEvent = delegateEvent;
exports.$__getEventAttribute = getEventAttribute;

exports.$__init = function(doc) {
    if (!listenersAttached) {
        listenersAttached = true;
        attachBubbleEventListeners(doc);
    }
};