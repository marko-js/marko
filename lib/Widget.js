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

var idRegExp = /\#(\w+)( .*)?/;

function removeListener(eventListenerHandle) {
    eventListenerHandle.remove();
}

function _destroy(widget, removeNode, recursive) {
    function walkDOM(el) {
        raptorDom.forEachChildEl(el, function (childEl) {
            if (childEl.id) {
                var descendentWidget = markoWidgets.get(childEl.id);
                if (descendentWidget) {
                    _destroy(descendentWidget, false, false);
                }
            }
            walkDOM(childEl);
        });
    }

    var message = { widget: widget };
    var rootEl = widget.getEl();

    var assignedId = widget.__assignedId;
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

    if (assignedId) {
        var scopeWidget = markoWidgets.get(widget.__scope);
        if (scopeWidget) {
            scopeWidget.widgets._remove(widget, assignedId);
        }
    }

    var eventListenerHandles = widget.__evHandles;
    if (eventListenerHandles) {
        eventListenerHandles.forEach(removeListener);
        widget.__evHandles = null;
    }

    widget.emit('destroy', message);
}

var widgetProto;
function Widget(id) {
    EventEmitter.call(this);
    this.id = id;
    this.el = null;
    this.__assignedId = null;
    this.__scope = null;
    this.__subscriptions = null;
    this.__evHandles = null;
    this.__destroyed = false;
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
    getElId: function (widgetElId) {
        return widgetElId ? this.id + '-' + widgetElId : this.id;
    },
    getEl: function (widgetElId) {
        if (arguments.length === 1 && widgetElId) {
            return document.getElementById(this.getElId(widgetElId));
        } else {
            return this.el || document.getElementById(this.getElId());
        }
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
        var el = this.el;

        if (callback) {
            raptorRenderer
                .render(this, data, function(err, renderResult) {
                    if (err) {
                        return callback(err);
                    }

                    renderResult.replace(el);
                    callback(null, renderResult.getWidget);
                });
        } else {
            return raptorRenderer
                .render(this, data)
                .replace(el)
                .getWidget();
        }
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