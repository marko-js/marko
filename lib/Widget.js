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
require('raptor-ecma/es5');
var extend = require('raptor-util/extend');
var inherit = require('raptor-util/inherit');
var raptorPubsub = require('raptor-pubsub');
var raptorDom = require('raptor-dom');
var raptorWidgets = require('raptor-widgets');
var raptorRenderer = require('raptor-renderer');
var EventEmitter = require('events').EventEmitter;

var JQUERY = 'jquery';
var idRegExp = /\#(\w+)( .*)?/g;
var INDEX_EVENT = 0;
var INDEX_LISTENER = 1;

var jquery = window.$;

if (!jquery) {
    try {
        jquery = require(JQUERY);
    }
    catch(e) {}
}

function _destroy(widget, removeNode, recursive) {
    function walkDOM(el) {
        raptorDom.forEachChildEl(el, function (childEl) {
            if (childEl.id) {
                var descendentWidget = raptorWidgets.get(childEl.id);
                if (descendentWidget) {
                    _destroy(descendentWidget, false, false);
                }
            }
            walkDOM(childEl);
        });
    }

    var message = { widget: widget };
    var rootEl = widget.getEl();
    
    var assignedId = widget._assignedId;
    widget.emit('beforeDestroy', message);
    widget.__destroyed = true;
    if (rootEl) {
        if (recursive) {
            walkDOM(rootEl);
        }

        if (removeNode && rootEl.parentNode) {
            //Remove the widget's DOM nodes from the DOM tree if the root element is known
            rootEl.parentNode.removeChild(rootEl);
        }
    }

    raptorWidgets._remove(widget.id);

    if (assignedId) {
        var scopeWidget = raptorWidgets.get(widget._scope);
        if (scopeWidget) {
            scopeWidget.widgets._remove(widget, assignedId);
        }
    }

    widget.emit('destroy', message);
}

function EventEmitterWrapper(target) {
    this._target = target;
    this._listeners = [];
}

EventEmitterWrapper.prototype = {
    _proxy: function(type, event, listener) {
        this._target[type](event, listener);
        this._listeners.push([event, listener]);
        return this;
    },

    _remove: function(test) {
        var target = this._target;
        var listeners = this._listeners;

        this._listeners = listeners.filter(function(listener) {
            var event = listener[INDEX_EVENT];
            var listenerFunc = listener[INDEX_LISTENER];

            if (test(event, listenerFunc)) {
                target.removeListener(event, listenerFunc);
                return false;
                
            } else {
                return true;
            }
        });
    },

    on: function(event, listener) {
        return this._proxy('on', event, listener);
    },

    once: function(event, listener) {
        return this._proxy('once', event, listener);
    },

    removeListener: function(event, listener) {
        if (listener) {
            this._remove(function(curEvent, curListener) {
                return listener === curListener;
            });
        } else {
            return this.removeAllListeners(event);
        }
    },

    removeAllListeners: function(event) {

        var listeners = this._listeners;
        var target = this._target;

        if (event) {
            this._remove(function(curEvent, curListener) {
                return event === curEvent;
            });
        } else {
            for (var i=listeners.length; i>=0; i--) {
                var cur = listeners[i];
                target.removeListener(cur[INDEX_EVENT], cur[INDEX_LISTENER]);
            }
            this._listeners.length = 0;
        }

        return this;
    }
};

EventEmitterWrapper.prototype.addListener = EventEmitterWrapper.prototype.on;

function attachDestroy(target, subscribeToList) {

    target.once('destroy', function() {
        for (var i=subscribeToList.length; i >= 0; i--) {
            if (subscribeToList[i]._target === target) {
                subscribeToList.splice(i, 1);
                break;
            }
        }
    });
}


function SubscriptionTracker(source) {
    this._subscribeToList = [];
}

SubscriptionTracker.prototype = {

    subscribeTo: function(target) {
        var subscribeTo;
        var subscribeToList = this._subscribeToList;

        for (var i=0, len=subscribeToList.length; i<len; i++) {
            var cur = subscribeToList[i];
            if (cur._target === target) {
                subscribeTo = cur;
                break;
            }
        }


        if (!subscribeTo) {
            subscribeTo = new EventEmitterWrapper(target);
            attachDestroy(target, subscribeToList);
            subscribeToList.push(subscribeTo);
        }

        return subscribeTo;
    },

    unsubscribeAll: function() {
        var subscribeToList = this._subscribeToList;
        for (var i=subscribeToList.length; i>=0; i--) {
            subscribeToList[i].removeAllListeners();
        }
        subscribeToList.length = 0;
    }
};




var widgetProto;
function Widget(id) {
    EventEmitter.call(this);

    this.id = id;
    if ((this.el = document.getElementById(id))) {
        this.el.__widget = this;
    }

    this._assignedId = null;
    this._scope = null;
    this._subscriptions = null;
    this._events = null;
}

Widget.prototype = widgetProto = {
    _isWidget: true,

    subscribeTo: function(target) {

        var tracker = this._subscriptions;
        if (!tracker) {
            var _this = this;
            this._subscriptions = tracker = new SubscriptionTracker(this);
            this.once('destroy', function() {
                tracker.unsubscribeAll();
                delete _this._subscriptions;
            });
        }

        return tracker.subscribeTo(target);
    },

    emit: function (type, arg) {
        EventEmitter.prototype.emit.apply(this, arguments);

        var pubsubEvent;
        if (this._events && (pubsubEvent = this._events[type])) {
            if (pubsubEvent.props) {
                if (arg == null || typeof arg !== 'object') {
                    arg = {
                        value: arg
                    };
                }
                extend(arg, pubsubEvent.props);
            }
            raptorPubsub.emit.apply(raptorPubsub, arguments);
        }
    },
    getElId: function (widgetElId) {
        return widgetElId ? this.id + '-' + widgetElId : this.id;
    },
    getEl: function (widgetElId) {
        if (arguments.length === 1) {
            return document.getElementById(this.getElId(widgetElId));
        } else {
            return this.el || document.getElementById(this.getElId());
        }
    },
    getWidget: function (nestedWidgetId) {
        return this.widgets.getWidget(nestedWidgetId);
    },
    getWidgets: function (nestedWidgetId) {
        return this.widgets.getWidgets(nestedWidgetId);
    },
    destroy: function (options) {
        options = options || {};
        _destroy(this, options.removeNode !== false, options.recursive !== false);
    },
    isDestroyed: function () {
        return this.__destroyed;
    },
    rerender: function (data, callback) {
        if (!this.render) {
            throw new Error('Widget does not have "render" method');
        }
        var _this = this;

        raptorRenderer
            .render(this, data, function(err, renderResult) {
                renderResult.replace(_this.el);
                callback();
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
        raptorWidgets.ready(callback, this);
    },
    $: function (arg) {
        var args = arguments;
        if (args.length === 1) {
            //Handle an "ondomready" callback function
            if (typeof arg === 'function') {
                var _this = this;
                jquery(function () {
                    arg.apply(_this, args);
                });
            } else if (typeof arg === 'string') {
                var match = idRegExp.exec(arg);
                idRegExp.lastIndex = 0;
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
        } else if (args.length === 2) {
            if (typeof args[1] === 'string') {
                return jquery(arg, this.getEl(args[1]));
            }
        } else if (args.length === 0) {
            return jquery(this.el);
        }
        return jquery.apply(window, arguments);
    }
};

widgetProto.elId = widgetProto.getElId;

inherit(Widget, EventEmitter);

module.exports = Widget;