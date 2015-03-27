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
var emit = EventEmitter.prototype.emit;

var idRegExp = /\#(\w+)( .*)?/;

function removeListener(eventListenerHandle) {
    eventListenerHandle.remove();
}

function _destroyRecursive(el) {
    raptorDom.forEachChildEl(el, function (childEl) {
        if (childEl.id) {
            var descendentWidget = markoWidgets.get(childEl.id);
            if (descendentWidget) {
                _destroy(descendentWidget, false, false);
            }
        }
        _destroyRecursive(childEl);
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

function _destroy(widget, removeNode, recursive) {
    if (widget.isDestroyed()) {
        return;
    }

    var isRerender = widget.__lifecycleState === 'rerender';

    var message = { widget: widget };
    var rootEl = widget.getEl();

    if (isRerender) {
        emitLifecycleEvent(widget, 'beforeUpdate', message);
    } else {
        emitLifecycleEvent(widget, 'beforeDestroy', message);
        widget.__lifecycleState = 'destroyed';
    }

    if (rootEl) {
        if (recursive) {
            _destroyRecursive(rootEl);
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

    if (!isRerender) {
        emitLifecycleEvent(widget, 'destroy', message);
    }
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
}

Widget.prototype = widgetProto = {
    _isWidget: true,

    subscribeTo: function(target) {

        var tracker = this.__subscriptions;
        if (!tracker) {
            var _this = this;
            this.__subscriptions = tracker = listenerTracker.createTracker();
            this.once('destroy', function() {
                tracker.removeAllListeners();
                delete _this.__subscriptions;
            });
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
        _destroy(this, options.removeNode !== false, options.recursive !== false);
    },
    isDestroyed: function () {
        return this.__lifecycleState === 'destroyed';
    },
    getBodyEl: function() {
        return this.bodyEl;
    },
    // setWidgetBody: function(content) {
    //     var bodyEl = this.bodyEl;
    //
    //     if (typeof content === 'function') {
    //         raptorRenderer.render(content).replaceChildrenOf(bodyEl);
    //     } else {
    //         bodyEl.innerHTML = content;
    //     }
    // },
    shouldUpdate: function(stateChanges, oldState) {
        for (var propName in stateChanges) {
            if (stateChanges.hasOwnProperty(propName)) {
                var newValue = stateChanges[propName];
                var oldValue = oldState[propName];

                if (oldValue !== newValue) {
                    return true;
                }
            }
        }
        return false;
    },
    setState: function(name, value) {
        if (typeof name === 'object') {
            // Merge in the new state with the old state
            var newState = name;
            for (var k in newState) {
                if (newState.hasOwnProperty(k)) {
                    this.setState(k, newState[k]);
                }
            }
            return;
        }


        if (this.state[name] === value) {
            return;
        }

        if (this.__dirty) {
            this.__stateChanges[name] = this.state[name] = value;
        } else {
            var currentState = this.state;
            this.__dirty = true;
            this.__oldState = currentState;
            this.state = extend({}, currentState);
            this.__stateChanges = {};
            // Update "this.state" before queuing up the update in
            // case the update applied immediately.
            this.__stateChanges[name] = this.state[name] = value;
            updateManager.queueWidgetUpdate(this);
        }
    },

    replaceState: function(newState) {
        var k;

        for (k in this.state) {
            if (this.state.hasOwnProperty(k) && !newState.hasOwnProperty(k)) {
                this.setState(k, null);
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
        if (this.getInitialState) {
            var state = this.getInitialState(newProps);
            this.replaceState(state);
        } else {
            if (!this.__newProps) {
                updateManager.queueWidgetUpdate(this);
            }

            this.__newProps = newProps;
        }
    },

    update: function() {
        var newProps = this.__newProps;
        if (newProps) {
            delete this.__newProps;
            this.rerender(newProps);
            return;
        }

        if (!this.__dirty) {
            // console.log('Skipping widget update (not dirty): ' + this.id);
            return;
        }

        var stateChanges = this.__stateChanges;
        var oldState = this.__oldState;

        if (this.shouldUpdate(stateChanges, oldState) !== false) {
            this.doUpdate(stateChanges, oldState);
        }

        this.__reset();
    },

    __reset: function() {
        this.__oldState = null;
        this.__dirty = false;
        this.__stateChanges = null;
    },

    // forceUpdate: function() {
    //     var stateChanges = this.__stateChanges || this.state;
    //     var oldState = this.__oldState || this.state;
    //
    //     this.doUpdate(stateChanges, oldState);
    //     this.__reset();
    // },

    doUpdate: function (stateChanges, oldState) {
        if (this.isDestroyed()) {
            return;
        }

        var handlerMethod;
        var handlers = [];

        for (var k in stateChanges) {
            if (stateChanges.hasOwnProperty(k)) {
                // checked --> updateChecked
                var handlerMethodName = 'update_' + k;

                handlerMethod = this[handlerMethodName];
                if (handlerMethod) {
                    handlers.push([k, handlerMethod]);
                } else {
                    this.rerender();
                    return;
                }
            }
        }

        // Otherwise, there are handlers for all of the changed properties
        // so apply the updates using those handlers

        for (var i=0, len=handlers.length; i<len; i++) {
            var handler = handlers[i];
            var propertyName = handler[0];
            handlerMethod = handler[1];

            var newValue = stateChanges[propertyName];
            var oldValue = oldState[propertyName];
            handlerMethod.call(this, newValue, oldValue);
        }

        emitLifecycleEvent(this, 'afterUpdate');

        this.__reset();
    },

    shouldReuseWidget: true,
    rerender: function(props) {
        if (!this.renderer) {
            throw new Error('Widget does not have a "renderer" property');
        }

        var elToReplace = document.getElementById(this.id);
        var self = this;

        var renderer = this.renderer || this;
        this.__lifecycleState = 'rerender';

        var templateData = extend({}, props || this.state);

        var global = templateData.$global = {};

        global.__rerenderWidget = this;
        global.__rerenderEl = this.el;

        global.__rerender = true;

        if (!props) {
            global.__rerenderState = props ? null : this.state;
        }

        updateManager.batchUpdate(function() {
            var renderResult = raptorRenderer
                .render(renderer, templateData);

            renderResult.replace(elToReplace);
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
                self.__reset();
            }
        });
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

module.exports = Widget;