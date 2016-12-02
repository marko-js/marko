'use strict';
var inherit = require('raptor-util/inherit');
var dom = require('./dom');
var markoWidgets = require('./');
var EventEmitter = require('events').EventEmitter;
var RenderResult = require('../runtime/RenderResult');
var listenerTracker = require('listener-tracker');
var extend = require('raptor-util/extend');
var updateManager = require('./update-manager');
var morphdom = require('morphdom');
var marko = require('marko');
var widgetLookup = require('./lookup').widgets;

var slice = Array.prototype.slice;

var MORPHDOM_SKIP = false;

var WIDGET_SUBSCRIBE_TO_OPTIONS = null;
var NON_WIDGET_SUBSCRIBE_TO_OPTIONS = {
    addDestroyListener: false
};


var emit = EventEmitter.prototype.emit;
var idRegExp = /^\#(\S+)( .*)?/;

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
    eventListenerHandle.remove();
}

function destroyRecursive(el) {
    dom.forEachChildEl(el, function (childEl) {
        var descendentWidget = childEl.__widget;
        if (descendentWidget) {
            destroy(descendentWidget, false, false);
        }
        destroyRecursive(childEl);
    });
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
    var eventListenerHandles = widget.__evHandles;
    if (eventListenerHandles) {
        eventListenerHandles.forEach(removeListener);
        widget.__evHandles = null;
    }
}

function destroyEl(widget, el, removeNode, recursive) {
    if (recursive) {
        destroyRecursive(el);
    }

    if (removeNode && el.parentNode) {
        //Remove the widget's DOM nodes from the DOM tree if the root element is known
        el.parentNode.removeChild(el);
    }

    el.__widget = null;
}

function destroy(widget, removeNode, recursive) {
    if (widget.isDestroyed()) {
        return;
    }


    emitLifecycleEvent(widget, 'beforeDestroy');
    widget.__lifecycleState = 'destroyed';

    var els = widget.els;
    for (var i=0; i<els.length; i++) {
        destroyEl(widget, els[i], removeNode, recursive);
    }

    widget.els = null;
    widget.el = null;

    // Unsubscribe from all DOM events
    removeDOMEventListeners(widget);

    if (widget.__subscriptions) {
        widget.__subscriptions.removeAllListeners();
        widget.__subscriptions = null;
    }

    delete widgetLookup[widget.id];

    emitLifecycleEvent(widget, 'destroy');
}

function setState(widget, name, value, forceDirty, noQueue) {
    if (typeof value === 'function') {
        return;
    }

    if (value === null) {
        // Treat null as undefined to simplify our comparison logic
        value = undefined;
    }

    if (forceDirty) {
        var dirtyState = widget.__dirtyState || (widget.__dirtyState = {});
        dirtyState[name] = true;
    } else if (widget.state[name] === value) {
        return;
    }

    var clean = !widget.__dirty;

    if (clean) {
        // This is the first time we are modifying the widget state
        // so introduce some properties to do some tracking of
        // changes to the state
        var currentState = widget.state;
        widget.__dirty = true; // Mark the widget state as dirty (i.e. modified)
        widget.__oldState = currentState;
        widget.state = extend({}, currentState);
        widget.__stateChanges = {};
    }

    widget.__stateChanges[name] = value;

    if (value == null) {
        // Don't store state properties with an undefined or null value
        delete widget.state[name];
    } else {
        // Otherwise, store the new value in the widget state
        widget.state[name] = value;
    }

    if (clean && noQueue !== true) {
        // If we were clean before then we are now dirty so queue
        // up the widget for update
        updateManager.queueWidgetUpdate(widget);
    }
}

function replaceState(widget, newState, noQueue) {
    var k;

    for (k in widget.state) {
        if (widget.state.hasOwnProperty(k) && !newState.hasOwnProperty(k)) {
            setState(widget, k, undefined, false, noQueue);
        }
    }

    for (k in newState) {
        if (newState.hasOwnProperty(k)) {
            setState(widget, k, newState[k], false, noQueue);
        }
    }
}

function resetWidget(widget) {
    widget.__oldState = null;
    widget.__dirty = false;
    widget.__stateChanges = null;
    widget.__newProps = null;
    widget.__dirtyState = null;
}

function hasCompatibleWidget(widgetsContext, existingWidget) {
    var id = existingWidget.id;
    var newWidgetDef = widgetsContext.getWidget(id);
    if (!newWidgetDef) {
        return false;
    }

    return existingWidget.__type === newWidgetDef.type;
}

function handleCustomEventWithMethodListener(widget, targetMethodName, args, extraArgs) {
    // Remove the "eventType" argument
    args.push(widget);

    if (extraArgs) {
        args = extraArgs.concat(args);
    }

    var targetWidget = markoWidgets.getWidgetForEl(widget.__scope);
    var targetMethod = targetWidget[targetMethodName];
    if (!targetMethod) {
        throw new Error('Method not found for widget ' + targetWidget.id + ': ' + targetMethodName);
    }

    targetMethod.apply(targetWidget, args);
}

function getElId(widget, widgetElId, index) {
    var id = widget.id;

    var elId = widgetElId != null ? id + '-' + widgetElId : id;

    if (index != null) {
        elId += '[' + index + ']';
    }

    return elId;
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
    this.bodyEl = null;
    this.state = null;
    this.__subscriptions = null;
    this.__evHandles = null;
    this.__lifecycleState = null;
    this.__customEvents = null;
    this.__scope = null;
    this.__dirty = false;
    this.__oldState = null;
    this.__stateChanges = null;
    this.__updateQueued = false;
    this.__dirtyState = null;
    this.__document = document;
}

Widget.prototype = widgetProto = {
    _isWidget: true,

    subscribeTo: function(target) {
        if (!target) {
            throw new Error('target is required');
        }

        var tracker = this.__subscriptions;
        if (!tracker) {
            this.__subscriptions = tracker = listenerTracker.createTracker();
        }


        var subscribeToOptions = target._isWidget ?
            WIDGET_SUBSCRIBE_TO_OPTIONS :
            NON_WIDGET_SUBSCRIBE_TO_OPTIONS;

        return tracker.subscribeTo(target, subscribeToOptions);
    },

    emit: function(eventType) {
        var customEvents = this.__customEvents;
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
        return getElId(this, widgetElId, index);
    },
    getEl: function (widgetElId, index) {
        var doc = this.__document;

        if (widgetElId != null) {
            return doc.getElementById(getElId(this, widgetElId, index));
        } else {
            return this.el || doc.getElementById(getElId(this));
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
        var targetWidgetId = getElId(this, id, index);
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
    destroy: function (options) {
        options = options || {};
        destroy(this, options.removeNode !== false, options.recursive !== false);
    },
    isDestroyed: function () {
        return this.__lifecycleState === 'destroyed';
    },
    getBodyEl: function() {
        return this.bodyEl;
    },
    setState: function(name, value) {
        if (typeof name === 'object') {
            // Merge in the new state with the old state
            var newState = name;
            for (var k in newState) {
                if (newState.hasOwnProperty(k)) {
                    setState(this, k, newState[k]);
                }
            }
            return;
        }

        setState(this, name, value);
    },

    setStateDirty: function(name, value) {
        if (arguments.length === 1) {
            value = this.state[name];
        }

        setState(this, name, value, true /* forceDirty */);
    },

    _replaceState: function(newState) {
        replaceState(this, newState, true /* do not queue an update */ );
    },

    _removeDOMEventListeners: function() {
        removeDOMEventListeners(this);
    },

    replaceState: function(newState) {
        replaceState(this, newState);
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
            var prevState = this.state;
            this.onInput(newProps || {});
            if(this.state !== prevState) {
                this.replaceState(this.state);
            }
            return;
        }

        if (!this.__newProps) {
            updateManager.queueWidgetUpdate(this);
        }

        this.__newProps = newProps;
    },

    update: function() {
        if (this.isDestroyed()) {
          return;
        }

        var newProps = this.__newProps;

        if (this.shouldUpdate(newProps, this.state) === false) {
            resetWidget(this);
            return;
        }

        if (newProps) {
            resetWidget(this);
            this.rerender(newProps);
            return;
        }

        if (!this.__dirty) {
            // Don't even bother trying to update this widget since it is
            // not marked as dirty.
            return;
        }

        if (!this._processUpdateHandlers()) {
            this.doUpdate(this.__stateChanges, this.__oldState);
        }

        // Reset all internal properties for tracking state changes, etc.
        resetWidget(this);
    },

    isDirty: function() {
        return this.__dirty;
    },

    _reset: function() {
        resetWidget(this);
    },

    /**
     * This method is used to process "update_<stateName>" handler functions.
     * If all of the modified state properties have a user provided update handler
     * then a rerender will be bypassed and, instead, the DOM will be updated
     * looping over and invoking the custom update handlers.
     * @return {boolean} Returns true if if the DOM was updated. False, otherwise.
     */
    _processUpdateHandlers: function() {
        var stateChanges = this.__stateChanges;
        var oldState = this.__oldState;

        var handlerMethod;
        var handlers = [];

        var newValue;
        var oldValue;

        for (var propName in stateChanges) {
            if (stateChanges.hasOwnProperty(propName)) {
                newValue = stateChanges[propName];
                oldValue = oldState[propName];

                if (oldValue === newValue) {
                    // Only do an update for this state property if it is actually
                    // different from the old state or if it was forced to be dirty
                    // using setStateDirty(propName)
                    var dirtyState = this.__dirtyState;
                    if (dirtyState == null || !dirtyState.hasOwnProperty(propName)) {
                        continue;
                    }
                }

                var handlerMethodName = 'update_' + propName;

                handlerMethod = this[handlerMethodName];
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

        emitLifecycleEvent(this, 'beforeUpdate');

        for (var i=0, len=handlers.length; i<len; i++) {
            var handler = handlers[i];
            var propertyName = handler[0];
            handlerMethod = handler[1];

            newValue = stateChanges[propertyName];
            oldValue = oldState[propertyName];
            handlerMethod.call(this, newValue, oldValue);
        }

        emitLifecycleEvent(this, 'update');

        resetWidget(this);

        return true;
    },

    shouldUpdate: function(newState, newProps) {
        return true;
    },

    doUpdate: function (stateChanges, oldState) {
        this.rerender();
    },

    _emitLifecycleEvent: function(eventType, eventArg) {
        emitLifecycleEvent(this, eventType, eventArg);
    },

    rerender: function(props) {
        var self = this;

        if (!self.renderer) {
            throw new Error('Widget does not have a "renderer" property');
        }

        var renderer = self.renderer;
        self.__lifecycleState = 'rerender';

        var templateData = extend({}, props || self.state);

        var globalData = {};

        globalData.__rerenderWidget = self;
        globalData.__rerenderEl = self.el;
        globalData.__rerender = true;

        if (!props) {
            globalData.__rerenderState = props ? null : self.state;
        }

        var els = this.els;
        var doc = this.__document;

        updateManager.batchUpdate(function() {
            var createOut = renderer.createOut || marko.createOut;
            var out = createOut(globalData);
            renderer(templateData, out);
            var result = new RenderResult(out);

            var targetNode;

            if (out.isVDOM) {
                if (els) {
                    targetNode = out.getOutput();
                } else {
                    targetNode = out.getOutput().firstChild;
                }

            } else {
                targetNode = out.getNode(self.__document);
            }

            var widgetsContext = out.global.widgets;

            function onNodeDiscarded(node) {
                var widget = node.__widget;
                if (widget) {
                    destroy(widget, false, false);
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
                    if (widgetsContext.isPreservedEl(id)) {

                        if (widgetsContext.hasUnpreservedBody(id)) {
                            existingWidget = fromEl.__widget;

                            morphdom(existingWidget.bodyEl, toEl, {
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
                        existingWidget = fromEl.__widget;
                        if (existingWidget && !hasCompatibleWidget(widgetsContext, existingWidget)) {
                            // We found a widget in an old DOM node that does not have
                            // a compatible widget that was rendered so we need to
                            // destroy the old widget
                            destroy(existingWidget, false, false);
                        }
                    }
                }
            }

            function onBeforeElChildrenUpdated(el) {
                if (widgetsContext && el.id) {
                    if (widgetsContext.isPreservedBodyEl(el.id)) {
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
            if (els) {
                var fromEls = {};
                els.forEach(function(fromEl) {
                    fromEls[fromEl.id] = fromEl;
                });

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

                result.afterInsert(els[0]);
            } else {
                fromEl = doc.getElementById(self.id);
                morphdom(fromEl, targetNode, morphdomOptions);
                // Trigger any 'onUpdate' events for all of the rendered widgets
                result.afterInsert(fromEl);
            }

            self.__lifecycleState = null;

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
    },
    ready: function (callback) {
        var document = this.el.ownerDocument;
        markoWidgets.ready(callback, this, document);
    },
    $: function (arg) {
        var jquery = markoWidgets.$;

        var args = arguments;
        if (args.length === 1) {
            //Handle an "ondomready" callback function
            if (typeof arg === 'function') {
                var _this = this;
                return _this.ready(function() {
                    arg.call(_this);
                });
            } else if (typeof arg === 'string') {
                var match = idRegExp.exec(arg);
                //Reset the search to 0 so the next call to exec will start from the beginning for the new string
                if (match != null) {
                    var widgetElId = match[1];
                    if (match[2] == null) {
                        return jquery(this.getEl(widgetElId));
                    } else {
                        return jquery('#' + getElId(this, widgetElId) + match[2]);
                    }
                } else {
                    var rootEl = this.getEl();
                    if (!rootEl) {
                        throw new Error('Root element is not defined for widget');
                    }
                    if (rootEl) {
                        return jquery(arg, rootEl);
                    }
                }
            }
        } else if (args.length === 2 && typeof args[1] === 'string') {
            return jquery(arg, this.getEl(args[1]));
        } else if (args.length === 0) {
            return jquery(this.el);
        }
        return jquery.apply(window, arguments);
    }
};

widgetProto.elId = widgetProto.getElId;

// Add all of the following DOM methods to Widget.prototype:
// - forEachChildEl(referenceEl)
// - forEachChild(referenceEl)
// - detach(referenceEl)
// - appendTo(referenceEl)
// - remove(referenceEl)
// - removeChildren(referenceEl)
// - replace(referenceEl)
// - replaceChildrenOf(referenceEl)
// - insertBefore(referenceEl)
// - insertAfter(referenceEl)
// - prependTo(referenceEl)
dom.mixin(
    widgetProto,
    function getNode(doc) {
        var els = this.els;
        var elCount = els.length;
        if (elCount > 1) {
            var fragment = doc.createDocumentFragment();
            for (var i=0; i<elCount; i++) {
                fragment.appendChild(els[i]);
            }
            return fragment;
        } else {
            return this.els[0];
        }
    });

inherit(Widget, EventEmitter);

module.exports = Widget;
