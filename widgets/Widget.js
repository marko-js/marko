'use strict';
/* jshint newcap:false */

var domInsert = require('../runtime/dom-insert');
var marko = require('../');
var markoWidgets = require('./');
var getRootEls = require('./getRootEls');
var EventEmitter = require('events-light');
var RenderResult = require('../runtime/RenderResult');
var SubscriptionTracker = require('listener-tracker');
var inherit = require('raptor-util/inherit');
var updateManager = require('./update-manager');
var morphdom = require('morphdom');
var widgetLookup = require('./lookup').widgets;

var slice = Array.prototype.slice;

var MORPHDOM_SKIP = false;

var WIDGET_SUBSCRIBE_TO_OPTIONS = null;
var NON_WIDGET_SUBSCRIBE_TO_OPTIONS = {
    addDestroyListener: false
};

var emit = EventEmitter.prototype.emit;

var lifecycleEventMethods = {
    'beforeDestroy': 'onBeforeDestroy',
    'destroy': 'onDestroy',
    'beforeUpdate': 'onBeforeUpdate',
    'update': 'onUpdate',
    'mount': 'onMount',
    'render': 'onRender',
    'beforeInit': 'onBeforeInit',
    'afterInit': 'onAfterInit'
};

function removeListener(eventListenerHandle) {
    eventListenerHandle();
}

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

function removeDOMEventListeners(widget) {
    var eventListenerHandles = widget.$__domEventListenerHandles;
    if (eventListenerHandles) {
        eventListenerHandles.forEach(removeListener);
        widget.$__domEventListenerHandles = null;
    }
}

function destroyWidgetForEl(el) {
    var widgetToDestroy = el.__widget;
    if (widgetToDestroy) {
        destroyWidgetHelper(widgetToDestroy);
        el.__widget = null;

        while ((widgetToDestroy = widgetToDestroy.$__rootFor)) {
            widgetToDestroy.$__rootFor = null;
            destroyWidgetHelper(widgetToDestroy);
        }
    }
}
function destroyElRecursive(el) {
    var curChild = el.firstChild;
    while(curChild) {
        if (curChild.nodeType === 1) {
            destroyElRecursive(curChild);
            destroyWidgetForEl(curChild);
        }
        curChild = curChild.nextSibling;
    }
}

function destroyWidgetHelper(widget) {
    if (widget.isDestroyed()) {
        return;
    }

    emitLifecycleEvent(widget, 'beforeDestroy');
    widget.$__lifecycleState = 'destroyed';

    widget.els = null;
    widget.el = null;

    // Unsubscribe from all DOM events
    removeDOMEventListeners(widget);

    if (widget.$__subscriptions) {
        widget.$__subscriptions.removeAllListeners();
        widget.$__subscriptions = null;
    }

    delete widgetLookup[widget.id];

    emitLifecycleEvent(widget, 'destroy');
}

function resetWidget(widget) {
    widget.$__newProps = null;
    widget.$__state.$__reset();
}

function hasCompatibleWidget(widgetsContext, existingWidget) {
    var id = existingWidget.id;
    var newWidgetDef = widgetsContext.$__widgetsById[id];
    if (!newWidgetDef) {
        return false;
    }

    return existingWidget.$__type === newWidgetDef.$__type;
}

function handleCustomEventWithMethodListener(widget, targetMethodName, args, extraArgs) {
    // Remove the "eventType" argument
    args.push(widget);

    if (extraArgs) {
        args = extraArgs.concat(args);
    }


    var targetWidget = widgetLookup[widget.$__scope];
    var targetMethod = targetWidget[targetMethodName];
    if (!targetMethod) {
        throw Error('Method not found: ' + targetMethodName);
    }

    targetMethod.apply(targetWidget, args);
}

function getElIdHelper(widget, widgetElId, index) {
    var id = widget.id;

    var elId = widgetElId != null ? id + '-' + widgetElId : id;

    if (index != null) {
        elId += '[' + index + ']';
    }

    return elId;
}

/**
 * This method is used to process "update_<stateName>" handler functions.
 * If all of the modified state properties have a user provided update handler
 * then a rerender will be bypassed and, instead, the DOM will be updated
 * looping over and invoking the custom update handlers.
 * @return {boolean} Returns true if if the DOM was updated. False, otherwise.
 */
function processUpdateHandlers(widget, stateChanges, oldState) {
    var handlerMethod;
    var handlers = [];


    for (var propName in stateChanges) {
        if (stateChanges.hasOwnProperty(propName)) {
            var handlerMethodName = 'update_' + propName;

            handlerMethod = widget[handlerMethodName];
            if (handlerMethod) {
                handlers.push([propName, handlerMethod]);
            } else {
                // This state change does not have a state handler so return false
                // to force a rerender
                return false;
            }
        }
    }

    // If we got here then all of the changed state properties have
    // an update handler or there are no state properties that actually
    // changed.

    if (!handlers.length) {
        return true;
    }

    // Otherwise, there are handlers for all of the changed properties
    // so apply the updates using those handlers

    emitLifecycleEvent(widget, 'beforeUpdate');

    for (var i=0, len=handlers.length; i<len; i++) {
        var handler = handlers[i];
        var propertyName = handler[0];
        handlerMethod = handler[1];

        var newValue = stateChanges[propertyName];
        var oldValue = oldState[propertyName];
        handlerMethod.call(widget, newValue, oldValue);
    }

    emitLifecycleEvent(widget, 'update');

    resetWidget(widget);

    return true;
}

var widgetProto;

/**
 * Base widget type.
 *
 * NOTE: Any methods that are prefixed with an underscore should be considered private!
 */
function Widget(id, document) {
    EventEmitter.call(this);
    this.id = id;
    this.el = null;
    this.$__bodyEl = null;
    this.$__state = null;
    this.$__roots = null;
    this.$__subscriptions = null;
    this.$__domEventListenerHandles = null;
    this.$__lifecycleState = null;
    this.$__customEvents = null;
    this.$__scope = null;
    this.$__updateQueued = false;
    this.$__document = document;
}

Widget.prototype = widgetProto = {
    $__isWidget: true,

    subscribeTo: function(target) {
        if (!target) {
            throw TypeError();
        }

        var tracker = this.$__subscriptions;
        if (!tracker) {
            this.$__subscriptions = tracker = new SubscriptionTracker();
        }

        var subscribeToOptions = target.$__isWidget ?
            WIDGET_SUBSCRIBE_TO_OPTIONS :
            NON_WIDGET_SUBSCRIBE_TO_OPTIONS;

        return tracker.subscribeTo(target, subscribeToOptions);
    },

    emit: function(eventType) {
        var customEvents = this.$__customEvents;
        var target;

        if (customEvents && (target = customEvents[eventType])) {
            var targetMethodName = target[0];
            var extraArgs = target[1];
            var args = slice.call(arguments, 1);

            handleCustomEventWithMethodListener(this, targetMethodName, args, extraArgs);
        }

        return emit.apply(this, arguments);
    },
    getElId: function (widgetElId, index) {
        return getElIdHelper(this, widgetElId, index);
    },
    getEl: function (widgetElId, index) {
        var doc = this.$__document;

        if (widgetElId != null) {
            return doc.getElementById(getElIdHelper(this, widgetElId, index));
        } else {
            return this.el || doc.getElementById(getElIdHelper(this));
        }
    },
    getEls: function(id) {
        var els = [];
        var i=0;
        while(true) {
            var el = this.getEl(id, i);
            if (!el) {
                break;
            }
            els.push(el);
            i++;
        }
        return els;
    },
    getWidget: function(id, index) {
        var targetWidgetId = getElIdHelper(this, id, index);
        return widgetLookup[targetWidgetId];
    },
    getWidgets: function(id) {
        var widgets = [];
        var i=0;
        while(true) {
            var widget = this.getWidget(id, i);
            if (!widget) {
                break;
            }
            widgets.push(widget);
            i++;
        }
        return widgets;
    },
    destroy: function () {
        if (this.isDestroyed()) {
            return;
        }

        var i, len;

        var els = this.els;

        for (i=0, len=els.length; i<len; i++) {
            var el = els[i];
            destroyElRecursive(el);

            var parentNode = el.parentNode;
            if (parentNode) {
                parentNode.removeChild(el);
            }
        }

        var rootWidgets = this.$__rootWidgets;
        if (rootWidgets) {
            for (i=0, len=rootWidgets.length; i<len; i++) {
                rootWidgets[i].destroy();
            }
        }

        destroyWidgetHelper(this);
    },
    isDestroyed: function () {
        return this.$__lifecycleState === 'destroyed';
    },
    get state() {
        return this.$__state;
    },
    set state(value) {
        if(!this.$__state && value) {
            this.$__state = new this.State(this, value);
        } else {
            this.$__state.$__replace(value);
        }
    },
    setState: function(name, value) {
        if (typeof name === 'object') {
            // Merge in the new state with the old state
            var newState = name;
            for (var k in newState) {
                if (newState.hasOwnProperty(k)) {
                    this.state.$__set(k, newState[k], true /* ensure:true */);
                }
            }
            return;
        }

         this.state.$__set(name, value, true /* ensure:true */);
    },

    setStateDirty: function(name, value) {
        if (arguments.length === 1) {
            value = this.state[name];
        }

        this.state.$__set(name, value, true /* ensure:true */, true /* forceDirty:true */);
    },

    replaceState: function(newState) {
        this.state.$__replace(newState);
    },

    /**
     * Recalculate the new state from the given props using the widget's
     * getInitialState(props) method. If the widget does not have a
     * getInitialState(props) then it is re-rendered with the new props
     * as input.
     *
     * @param {Object} props The widget's new props
     */
    setProps: function(newProps) {
        if (this.getInitialState) {
            if (this.getInitialProps) {
                newProps = this.getInitialProps(newProps) || {};
            }
            var newState = this.getInitialState(newProps);
            this.replaceState(newState);
            return;
        }

        if (this.onInput) {
            this.onInput(newProps || {});
            return;
        }

        if (!this.$__newProps) {
            updateManager.$__queueWidgetUpdate(this);
        }

        this.$__newProps = newProps;
    },

    update: function() {
        if (this.isDestroyed()) {
          return;
        }

        var newProps = this.$__newProps;

        if (this.shouldUpdate(newProps, this.state) === false) {
            resetWidget(this);
            return;
        }

        if (newProps) {
            resetWidget(this);
            this.rerender(newProps);
            return;
        }

        var state = this.$__state;

        if (!state.$__dirty) {
            // Don't even bother trying to update this widget since it is
            // not marked as dirty.
            return;
        }

        var stateChanges = state.$__changes;
        var oldState = state.$__old;

        if (!processUpdateHandlers(this, stateChanges, oldState, state)) {
            this.doUpdate(stateChanges, oldState);
        }

        // Reset all internal properties for tracking state changes, etc.
        resetWidget(this);
    },

    $__replaceState: function(newState) {
        var state = this.$__state;

        // Update the existing widget state using the internal/private
        // method to ensure that another update is not queued up
        state.$__replace(newState, true /* do not queue an update */);


        // If the widget has custom state update handlers then we will use those methods
        // to update the widget.
        return processUpdateHandlers(this, state.$__changes, state.$__old);
    },

    get $__isDirty() {
        return this.$__state.$__dirty;
    },

    _reset: function(shouldRemoveDOMEventListeners) {
        resetWidget(this);

        if (shouldRemoveDOMEventListeners) {
            removeDOMEventListeners(this);
        }
    },

    shouldUpdate: function(newState, newProps) {
        return true;
    },

    doUpdate: function (stateChanges, oldState) {
        this.rerender();
    },

    $__emitLifecycleEvent: function(eventType, eventArg) {
        emitLifecycleEvent(this, eventType, eventArg);
    },

    rerender: function(props) {
        var self = this;

        if (!self.renderer) {
            throw Error('No renderer');
        }

        var renderer = self.renderer;
        self.$__lifecycleState = 'rerender';

        var state = self.$__state;

        var globalData = {};
        globalData.$w = [self, !props && state && state.$__raw];

        var fromEls = getRootEls(self, {});
        var doc = self.$__document;

        updateManager.$__batchUpdate(function() {
            var createOut = renderer.createOut || marko.createOut;
            var out = createOut(globalData);
            renderer(props, out);
            var result = new RenderResult(out);

            var targetNode = out.getOutput();

            var widgetsContext = out.global.widgets;

            function onNodeDiscarded(node) {
                if (node.nodeType === 1) {
                    destroyWidgetForEl(node);
                }
            }

            function onBeforeElUpdated(fromEl, toEl) {
                var id = fromEl.id;
                var existingWidget;

                var preservedAttrs = !out.isVDOM && toEl.getAttribute('data-preserve-attrs');
                if (preservedAttrs) {
                    preservedAttrs = preservedAttrs.split(/\s*[,]\s*/);
                    for (var i=0; i<preservedAttrs.length; i++) {
                        var preservedAttrName = preservedAttrs[i];
                        var preservedAttrValue = fromEl.getAttribute(preservedAttrName);
                        if (preservedAttrValue == null) {
                            toEl.removeAttribute(preservedAttrName);
                        } else {
                            toEl.setAttribute(preservedAttrName, preservedAttrValue);
                        }
                    }
                }

                if (widgetsContext && id) {
                    var preserved = widgetsContext.$__preserved[id];

                    if (preserved && !preserved.$__bodyOnly) {
                        if (preserved.$__bodyEl) {
                            morphdom(preserved.$__bodyEl, toEl, {
                                childrenOnly: true,
                                onNodeDiscarded: onNodeDiscarded,
                                onBeforeElUpdated: onBeforeElUpdated,
                                onBeforeElChildrenUpdated: onBeforeElChildrenUpdated
                            });
                        }

                        // Don't morph elements that are associated with widgets that are being
                        // reused or elements that are being preserved. For widgets being reused,
                        // the morphing will take place when the reused widget updates.
                        return MORPHDOM_SKIP;
                    } else {
                        existingWidget = markoWidgets.getWidgetForEl(fromEl);
                        if (existingWidget && !hasCompatibleWidget(widgetsContext, existingWidget)) {
                            // We found a widget in an old DOM node that does not have
                            // a compatible widget that was rendered so we need to
                            // destroy the old widget
                            destroyWidgetHelper(existingWidget);
                        }
                    }
                }
            }

            function onBeforeElChildrenUpdated(el) {
                var id = el.id;
                if (widgetsContext && id) {
                    var preserved = widgetsContext.$__preserved[id];
                    if (preserved && preserved.$__bodyOnly) {
                        // Don't morph the children since they are preserved
                        return MORPHDOM_SKIP;
                    }
                }
            }

            var morphdomOptions = {
                onNodeDiscarded: onNodeDiscarded,
                onBeforeElUpdated: onBeforeElUpdated,
                onBeforeElChildrenUpdated: onBeforeElChildrenUpdated
            };

            var fromEl;

            var targetEl = targetNode.firstChild;
            while(targetEl) {
                var id = targetEl.id;

                if (id) {
                    fromEl = fromEls[id];
                    if (fromEl) {
                        morphdom(fromEl, targetEl, morphdomOptions);
                    }
                }

                targetEl = targetEl.nextSibling;
            }

            result.afterInsert(doc);

            self.$__lifecycleState = null;

            if (!props) {
                // We have re-rendered with the new state so our state
                // is no longer dirty. Before updating a widget
                // we check if a widget is dirty. If a widget is not
                // dirty then we abort the update. Therefore, if the
                // widget was queued for update and the re-rendered
                // before the update occurred then nothing will happen
                // at the time of the update.
                resetWidget(self);
            }
        });
    }
};

widgetProto.elId = widgetProto.getElId;

// Add all of the following DOM methods to Widget.prototype:
// - appendTo(referenceEl)
// - replace(referenceEl)
// - replaceChildrenOf(referenceEl)
// - insertBefore(referenceEl)
// - insertAfter(referenceEl)
// - prependTo(referenceEl)
domInsert(
    widgetProto,
    function getEl(widget) {
        var els = this.els;
        var elCount = els.length;
        if (elCount > 1) {
            var fragment = widget.$__document.createDocumentFragment();
            for (var i=0; i<elCount; i++) {
                fragment.appendChild(els[i]);
            }
            return fragment;
        } else {
            return this.els[0];
        }
    },
    function afterInsert(widget) {
        return widget;
    });

inherit(Widget, EventEmitter);

module.exports = Widget;
