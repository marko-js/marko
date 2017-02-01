'use strict';
/* jshint newcap:false */

var domInsert = require('../runtime/dom-insert');
var marko = require('../');
var widgetsUtil = require('./util');
var getWidgetForEl = widgetsUtil.$__getWidgetForEl;
var widgetLookup = widgetsUtil.$__widgetLookup;
var emitLifecycleEvent = widgetsUtil.$__emitLifecycleEvent;
var destroyWidgetForEl = widgetsUtil.$__destroyWidgetForEl;
var destroyElRecursive = widgetsUtil.$__destroyElRecursive;
var getElementById = widgetsUtil.$__getElementById;
var EventEmitter = require('events-light');
var RenderResult = require('../runtime/RenderResult');
var SubscriptionTracker = require('listener-tracker');
var inherit = require('raptor-util/inherit');
var updateManager = require('./update-manager');
var morphAttrs = require('../runtime/vdom/VElement').$__morphAttrs;
var morphdomFactory = require('morphdom/factory');
var morphdom = morphdomFactory(morphAttrs);


var slice = Array.prototype.slice;

var MORPHDOM_SKIP = false;

var WIDGET_SUBSCRIBE_TO_OPTIONS;
var NON_WIDGET_SUBSCRIBE_TO_OPTIONS = {
    addDestroyListener: false
};

var emit = EventEmitter.prototype.emit;

function removeListener(removeEventListenerHandle) {
    removeEventListenerHandle();
}

function hasCompatibleWidget(widgetsContext, existingWidget) {
    var id = existingWidget.id;
    var newWidgetDef = widgetsContext.$__widgetsById[id];
    return newWidgetDef && existingWidget.$__type == newWidgetDef.$__widget.$__type;
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
    var handlers;

    for (var propName in stateChanges) {
        if (stateChanges.hasOwnProperty(propName)) {
            var handlerMethodName = 'update_' + propName;

            handlerMethod = widget[handlerMethodName];
            if (handlerMethod) {
                (handlers || (handlers=[])).push([propName, handlerMethod]);
            } else {
                // This state change does not have a state handler so return false
                // to force a rerender
                return;
            }
        }
    }

    // If we got here then all of the changed state properties have
    // an update handler or there are no state properties that actually
    // changed.
    if (handlers) {
        // Otherwise, there are handlers for all of the changed properties
        // so apply the updates using those handlers

        for (var i=0, len=handlers.length; i<len; i++) {
            var handler = handlers[i];
            var propertyName = handler[0];
            handlerMethod = handler[1];

            var newValue = stateChanges[propertyName];
            var oldValue = oldState[propertyName];
            handlerMethod.call(widget, newValue, oldValue);
        }

        emitLifecycleEvent(widget, 'update');

        widget.$__reset();
    }

    return true;
}

function checkInputChanged(existingWidget, oldInput, newInput) {
    if (oldInput != newInput) {
        if (oldInput == null || newInput == null) {
            return true;
        }

        var oldKeys = Object.keys(oldInput);
        var newKeys = Object.keys(newInput);
        var len = oldKeys.length;
        if (len !== newKeys.length) {
            return true;
        }

        for (var i=0; i<len; i++) {
            var key = oldKeys[i];
            if (oldInput[key] !== newInput[key]) {
                return true;
            }
        }
    }

    return false;
}

var widgetProto;

/**
 * Base widget type.
 *
 * NOTE: Any methods that are prefixed with an underscore should be considered private!
 */
function Widget(id, doc) {
    EventEmitter.call(this);
    this.id = id;
    this.el =
        this.$__state =
        this.$__roots =
        this.$__subscriptions =
        this.$__domEventListenerHandles =
        this.$__customEvents =
        this.$__scope =
        this.$__renderInput =
        null;

    this.$__destroyed =
        this.$__updateQueued =
        this.$__dirty =
        this.$__settingInput =
        false;

    this.$__document = doc;
}

Widget.prototype = widgetProto = {
    $__isWidget: true,

    subscribeTo: function(target) {
        if (!target) {
            throw TypeError();
        }

        var subscriptions = this.$__subscriptions || (this.$__subscriptions = new SubscriptionTracker());

        var subscribeToOptions = target.$__isWidget ?
            WIDGET_SUBSCRIBE_TO_OPTIONS :
            NON_WIDGET_SUBSCRIBE_TO_OPTIONS;

        return subscriptions.subscribeTo(target, subscribeToOptions);
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
            return getElementById(doc, getElIdHelper(this, widgetElId, index));
        } else {
            return this.el || getElementById(doc, getElIdHelper(this));
        }
    },
    getEls: function(id) {
        var els = [];
        var i = 0;
        var el;
        while((el = this.getEl(id, i))) {
            els.push(el);
            i++;
        }
        return els;
    },
    getWidget: function(id, index) {
        return widgetLookup[getElIdHelper(this, id, index)];
    },
    getWidgets: function(id) {
        var widgets = [];
        var i = 0;
        var widget;
        while((widget = widgetLookup[getElIdHelper(this, id, i)])) {
            widgets.push(widget);
            i++;
        }
        return widgets;
    },
    destroy: function() {
        if (this.$__destroyed) {
            return;
        }

        var i, len;

        var els = this.els;

        this.$__destroyShallow();

        var rootWidgets = this.$__rootWidgets;
        if (rootWidgets) {
            for (i=0, len=rootWidgets.length; i<len; i++) {
                rootWidgets[i].destroy();
            }
        }

        for (i=0, len=els.length; i<len; i++) {
            var el = els[i];
            destroyElRecursive(el);

            var parentNode = el.parentNode;
            if (parentNode) {
                parentNode.removeChild(el);
            }
        }
    },

    $__destroyShallow: function() {
        if (this.$__destroyed) {
            return;
        }

        emitLifecycleEvent(this, 'destroy');
        this.$__destroyed = true;

        this.el = null;

        // Unsubscribe from all DOM events
        this.$__removeDOMEventListeners();

        var subscriptions = this.$__subscriptions;
        if (subscriptions) {
            subscriptions.removeAllListeners();
            this.$__subscriptions = null;
        }

        delete widgetLookup[this.id];
    },

    isDestroyed: function() {
        return this.$__destroyed;
    },
    get state() {
        return this.$__state;
    },
    set state(newState) {
        var state = this.$__state;
        if (!state && !newState) {
            return;
        }

        if (!state) {
                state = this.$__state = new this.$__State(this);
        }

        state.$__replace(newState || {});

        if (state.$__dirty) {
            this.$__queueUpdate();
        }

        if (!newState) {
            this.$__state = null;
        }
    },
    setState: function(name, value) {
        var state = this.$__state;

        if (typeof name == 'object') {
            // Merge in the new state with the old state
            var newState = name;
            for (var k in newState) {
                if (newState.hasOwnProperty(k)) {
                    state.$__set(k, newState[k], true /* ensure:true */);
                }
            }
        } else {
            state.$__set(name, value, true /* ensure:true */);
        }
    },

    setStateDirty: function(name, value) {
        var state = this.$__state;

        if (arguments.length == 1) {
            value = state[name];
        }

        state.$__set(name, value, true /* ensure:true */, true /* forceDirty:true */);
    },

    replaceState: function(newState) {
        this.$__state.$__replace(newState);
    },

    get input() {
        return this.$__input;
    },
    set input(newInput) {
        if (this.$__settingInput) {
            this.$__input = newInput;
        } else {
            this.$__setInput(newInput);
        }
    },
    $__setInput: function(newInput, onInput, out) {
        onInput = onInput || this.onInput;
        var updatedInput;

        var oldInput = this.$__input;
        this.$__input = undefined;

        if (onInput) {
            // We need to set a flag to preview `this.input = foo` inside
            // onInput causing infinite recursion
            this.$__settingInput = true;
            updatedInput = onInput.call(this, newInput || {}, out);
            this.$__settingInput = false;
        }

        newInput = this.$__renderInput = updatedInput || newInput;

        if ((this.$__dirty = checkInputChanged(this, oldInput, newInput))) {
            this.$__queueUpdate();
        }

        if (this.$__input === undefined) {
            this.$__input = newInput;
        }

        return newInput;
    },

    $__queueUpdate: function() {
        if (!this.$__updateQueued) {
            updateManager.$__queueWidgetUpdate(this);
        }
    },

    update: function() {
        if (this.$__destroyed || !this.$__isDirty) {
            return;
        }

        var input = this.$__input;
        var state = this.$__state;

        if (!this.$__dirty && state && state.$__dirty) {
            if (processUpdateHandlers(this, state.$__changes, state.$__old, state)) {
                state.$__dirty = false;
            }
        }

        if (this.$__isDirty) {
            // The UI component is still dirty after process state handlers
            // then we should rerender

            if (this.shouldUpdate(input, state) !== false) {
                this.doUpdate();
            }
        }

        this.$__reset();
    },


    get $__isDirty() {
        return this.$__dirty || (this.$__state && this.$__state.$__dirty);
    },

    $__reset: function() {
        this.$__dirty = false;
        this.$__updateQueued = false;
        this.$__renderInput = null;
        var state = this.$__state;
        if (state) {
            state.$__reset();
        }
    },

    shouldUpdate: function(newState, newProps) {
        return true;
    },

    doUpdate: function() {
        this.rerender();
    },

    $__emitLifecycleEvent: function(eventType, eventArg) {
        emitLifecycleEvent(this, eventType, eventArg);
    },

    rerender: function(input) {
        if (input) {
            this.input = input;
        }

        var self = this;
        var renderer = self.renderer;

        if (!renderer) {
            throw TypeError();
        }

        var globalData = {
            $w: self
        };

        var fromEls = self.$__getRootEls({});
        var doc = self.$__document;
        input = this.$__renderInput || this.$__input;

        updateManager.$__batchUpdate(function() {
            var createOut = renderer.createOut || marko.createOut;
            var out = createOut(globalData);
            out.$__document = self.$__document;
            renderer(input, out);
            var result = new RenderResult(out);
            var targetNode = out.$__getOutput();

            var widgetsContext = out.global.widgets;

            function onNodeDiscarded(node) {
                if (node.nodeType == 1) {
                    destroyWidgetForEl(node);
                }
            }

            function onBeforeElUpdated(fromEl, toEl) {
                var id = fromEl.id;
                var existingWidget;

                if (widgetsContext && id) {
                    var preserved = widgetsContext.$__preserved[id];

                    if (preserved && !preserved.$__bodyOnly) {
                        // Don't morph elements that are associated with widgets that are being
                        // reused or elements that are being preserved. For widgets being reused,
                        // the morphing will take place when the reused widget updates.
                        return MORPHDOM_SKIP;
                    } else {
                        existingWidget = getWidgetForEl(fromEl);
                        if (existingWidget && !hasCompatibleWidget(widgetsContext, existingWidget)) {
                            // We found a widget in an old DOM node that does not have
                            // a compatible widget that was rendered so we need to
                            // destroy the old widget
                            existingWidget.$__destroyShallow();
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
        });
    },

    $__getRootEls: function(rootEls) {
        var i, len;

        var widgetEls = this.els;

        for (i=0, len=widgetEls.length; i<len; i++) {
            var widgetEl = widgetEls[i];
            rootEls[widgetEl.id] = widgetEl;
        }

        var rootWidgets = this.$__rootWidgets;
        if (rootWidgets) {
            for (i=0, len=rootWidgets.length; i<len; i++) {
                var rootWidget = rootWidgets[i];
                rootWidget.$__getRootEls(rootEls);
            }
        }

        return rootEls;
    },

    $__removeDOMEventListeners: function() {
        var eventListenerHandles = this.$__domEventListenerHandles;
        if (eventListenerHandles) {
            eventListenerHandles.forEach(removeListener);
            this.$__domEventListenerHandles = null;
        }
    },

    get $__rawState() {
        var state = this.$__state;
        return state && state.$__raw;
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
            return els[0];
        }
    },
    function afterInsert(widget) {
        return widget;
    });

inherit(Widget, EventEmitter);

module.exports = Widget;
