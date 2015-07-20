/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var inherit = require('raptor-util/inherit');
var raptorDom = require('raptor-dom');
var markoWidgets = require('./');
var raptorRenderer = require('raptor-renderer');
var EventEmitter = require('events').EventEmitter;
var listenerTracker = require('listener-tracker');
var arrayFromArguments = require('raptor-util/arrayFromArguments');
var extend = require('raptor-util/extend');
var updateManager = require('./update-manager');
var morphdom = require('morphdom');

var MORPHDOM_SKIP = false;

var emit = EventEmitter.prototype.emit;
var idRegExp = /\#(\w+)( .*)?/;

function removeListener(eventListenerHandle) {
    eventListenerHandle.remove();
}

function destroyRecursive(el) {
    raptorDom.forEachChildEl(el, function (childEl) {
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
 * afterUpdate   --> onAfterUpdate
 */
function emitLifecycleEvent(widget, eventType, eventArg) {


    var eventMethod = 'on' +
        eventType.charAt(0).toUpperCase() +
        eventType.substring(1);


    var listenerMethod = widget[eventMethod];

    if (listenerMethod) {
        listenerMethod.call(widget, eventArg);
    }

    widget.emit.apply(widget, [eventType, eventArg]);
}

function destroy(widget, removeNode, recursive) {
    if (widget.isDestroyed()) {
        return;
    }

    var isRerender = widget.__lifecycleState === 'rerender';

    var rootEl = widget.getEl();

    if (!isRerender) {
        emitLifecycleEvent(widget, 'beforeDestroy');
        widget.__lifecycleState = 'destroyed';
    }

    if (rootEl) {
        if (recursive) {
            destroyRecursive(rootEl);
        }

        if (removeNode && rootEl.parentNode) {
            //Remove the widget's DOM nodes from the DOM tree if the root element is known
            rootEl.parentNode.removeChild(rootEl);
        }
    }

    // Unsubscribe from all DOM events
    var eventListenerHandles = widget.__evHandles;
    if (eventListenerHandles) {
        eventListenerHandles.forEach(removeListener);
        widget.__evHandles = null;
    }

    if (widget.__subscriptions) {
        widget.__subscriptions.removeAllListeners();
        widget.__subscriptions = null;
    }

    if (!isRerender) {
        emitLifecycleEvent(widget, 'destroy');
    }
}

function setState(widget, name, value, forceDirty) {
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

    if (clean) {
        // If we were clean before then we are now dirty so queue
        // up the widget for update
        updateManager.queueWidgetUpdate(widget);
    }
}

function resetWidget(widget) {
    widget.__oldState = null;
    widget.__dirty = false;
    widget.__stateChanges = null;
    widget.__newProps = null;
    widget.__dirtyState = null;
}

var widgetProto;

function Widget(id) {
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

        return tracker.subscribeTo(target);
    },

    emit: function(eventType) {
        var customEvents = this.__customEvents;
        var targetMethodName;
        var args;

        if (customEvents && (targetMethodName = customEvents[eventType])) {
            args = args || arrayFromArguments(arguments, 1);
            args.push(this);

            var targetWidget = markoWidgets.getWidgetForEl(this.__scope);
            var targetMethod = targetWidget[targetMethodName];
            if (!targetMethod) {
                throw new Error('Method not found for widget ' + targetWidget.id + ': ' + targetMethodName);
            }

            targetMethod.apply(targetWidget, args);
        }

        return emit.apply(this, arguments);
    },
    getElId: function (widgetElId, index) {
        var elId = widgetElId != null ? this.id + '-' + widgetElId : this.id;

        if (index != null) {
            elId += '[' + index + ']';
        }

        return elId;
    },
    getEl: function (widgetElId, index) {
        if (widgetElId != null) {
            return document.getElementById(this.getElId(widgetElId, index));
        } else {
            return this.el || document.getElementById(this.getElId());
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
        var targetWidgetId = this.getElId(id, index);
        return markoWidgets.getWidgetForEl(targetWidgetId);
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

    replaceState: function(newState) {
        var k;

        for (k in this.state) {
            if (this.state.hasOwnProperty(k) && !newState.hasOwnProperty(k)) {
                this.setState(k, undefined);
            }
        }

        for (k in newState) {
            if (newState.hasOwnProperty(k)) {
                this.setState(k, newState[k]);
            }
        }
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
        if (!this.__newProps) {
            updateManager.queueWidgetUpdate(this);
        }

        this.__newProps = newProps;
    },

    update: function() {
        var newProps = this.__newProps;
        if (newProps) {
            delete this.__newProps;
            this._rerender(newProps);
            return;
        }

        if (!this.__dirty) {
            // Don't even bother trying to update this widget since it is
            // not marked as dirty.
            return;
        }

        this.doUpdate(this.__stateChanges, this.__oldState);

        // Reset all internal properties for tracking state changes, etc.
        resetWidget(this);
    },

    doUpdate: function (stateChanges, oldState) {
        if (this.isDestroyed()) {
            return;
        }

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
                    this.rerender();
                    return;
                }
            }
        }

        // If we got here then all of the changed state properties have
        // an update handler or there are no state properties that actually
        // changed.

        if (!handlers.length) {
            return;
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

        emitLifecycleEvent(this, 'afterUpdate');

        resetWidget(this);
    },

    shouldReuseWidget: true,

    _rerender: function(props, isReuse) {
        var self = this;

        if (!self.renderer) {
            throw new Error('Widget does not have a "renderer" property');
        }

        var elToReplace = document.getElementById(self.id);

        var renderer = self.renderer || self;
        self.__lifecycleState = 'rerender';

        var templateData = extend({}, props || self.state);

        var global = templateData.$global = {};

        global.__rerenderWidget = self;
        global.__rerenderEl = self.el;
        global.__rerender = true;

        if (isReuse) {
            // This flag is needed because when we reuse a stateless
            // self we have already normalized the properties
            // using getInitialProps() and we don't want to repeat
            // that step. A stateless self that is being reused
            // is always rerendered with the new props.
            global.__widgetIsReuse = true;
        }

        if (!props) {
            global.__rerenderState = props ? null : self.state;
        }

        emitLifecycleEvent(self, 'beforeUpdate');

        updateManager.batchUpdate(function() {
            var renderResult = raptorRenderer
                .render(renderer, templateData);

            var newNode = renderResult.getNode();
            var out = renderResult.out;
            var widgetsContext = out.global.widgets;

            // console.log(module.id, 'rerender complete ' + self.id + ' - Replacing el: ', elToReplace);
            // renderResult.replace(elToReplace);
            morphdom(elToReplace, newNode, {
                onNodeDiscarded: function(node) {
                    var widget = node.__widget;
                    if (widget) {
                        if (!widgetsContext.isReusedWidget(widget.id) && !widgetsContext.isPreservedEl(widget.id)) {
                            // If the DOM element being removed from the DOM has an associated widget
                            // then we need to destroy that widget for proper cleanup.
                            destroy(widget, false, false);
                        }
                    }
                },
                onBeforeMorphEl: function(el) {
                    if (widgetsContext && el.id) {
                        if (widgetsContext.isReusedWidget(el.id) || widgetsContext.isPreservedEl(el.id)) {
                            // Don't morph elements that are associated with widgets that are being
                            // reused or elements that are being preserved. For widgets being reused,
                            // the morphing will take place when the reused widget updates.
                            return MORPHDOM_SKIP;
                        } else {
                            var widget = el.__widget;
                            if (widget) {
                                // If there is an old widget associated with this DOM element that
                                // is about to be morphed then we need to destroy it since we will
                                // reinitializing all widgets after the DOM is updated.
                                destroy(widget, false, false);
                            }
                        }
                    }
                },

                onBeforeMorphElChildren: function(el) {
                    if (widgetsContext && el.id) {
                        if (widgetsContext.isPreservedBodyEl(el.id)) {
                            // Don't morph the children since they are preserved
                            return MORPHDOM_SKIP;
                        }
                    }
                }
            });

            renderResult.afterInsert();

            self.__lifecycleState = null;
            emitLifecycleEvent(self, 'afterUpdate');

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

    rerender: function(props) {
        this._rerender(props);
    },

    detach: function () {
        raptorDom.detach(this.el);

    },
    appendTo: function (targetEl) {
        raptorDom.appendTo(this.el, targetEl);
    },
    replace: function (targetEl) {
        raptorDom.replace(this.el, targetEl);
    },
    replaceChildrenOf: function (targetEl) {
        raptorDom.replaceChildrenOf(this.el, targetEl);
    },
    insertBefore: function (targetEl) {
        raptorDom.insertBefore(this.el, targetEl);
    },
    insertAfter: function (targetEl) {
        raptorDom.insertAfter(this.el, targetEl);
    },
    prependTo: function (targetEl) {
        raptorDom.prependTo(this.el, targetEl);
    },
    ready: function (callback) {
        markoWidgets.ready(callback, this);
    },
    $: function (arg) {
        var jquery = markoWidgets.$;

        var args = arguments;
        if (args.length === 1) {
            //Handle an "ondomready" callback function
            if (typeof arg === 'function') {
                var _this = this;
                _this.ready(function() {
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
                        return jquery('#' + this.getElId(widgetElId) + match[2]);
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

inherit(Widget, EventEmitter);

if (Object.defineProperty) {
    Object.defineProperty(
        Widget.prototype,
        'widgets',
        {
            get: function() {
                throw new Error('this.widgets is no longer supported. Use this.getWidget(id) instead');
            }
        });
}

module.exports = Widget;