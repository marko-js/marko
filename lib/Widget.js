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
/**
 * Mixins applied to the prototypes of all widget instances
 * @mixin
 *
 * @borrows raptor/listeners/Observable#publish as #publish
 * @borrows raptor/listeners/Observable#subscribe as #subscribe
 */
'use strict';
var extend = require('raptor-util').extend;
var raptorListeners = require('raptor-listeners');
var raptorDom = require('raptor-dom');
var raptorWidgets = require('raptor-widgets');

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
    widget.publish('beforeDestroy', message);
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

    widget.publish('destroy', message);
    // Have the widget unsubscribe from any messages that is currently subscribed to
    // Unsubscribe all messages after publishing "destroy" otherwise the widget might not get that event
    raptorListeners.unsubscribeFromAll(widget);
}



var widgetProto;
function Widget() {
}

Widget.makeWidget = function (widget, proto) {
    if (!widget._isWidget) {
        for (var k in widgetProto) {
            if (!proto.hasOwnProperty(k)) {
                proto[k] = widgetProto[k];
            }
        }
    }
};

Widget.prototype = widgetProto = {
    _isWidget: true,
    getEvents: function () {
        return this._ob ||
            (this._ob = raptorListeners.createObservable());
    },
    registerMessages: function () {
        this.getEvents().registerMessages.apply(this, arguments);
    },
    publish: function (message, props) {
        var ob = this.getEvents();
        ob.publish.apply(ob, arguments);
        var pubsubEvent;
        if (this._events && (pubsubEvent = this._events[message])) {
            if (pubsubEvent.props) {
                props = extend(props || {}, pubsubEvent.props);
            }
            require('raptor-pubsub').publish(pubsubEvent.target, props);
        }
    },
    subscribe: function (message, callback, thisObj) {
        var ob = this.getEvents();
        return ob.subscribe.apply(ob, arguments);
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
    rerender: function (data, context) {
        if (!this.render) {
            throw new Error('"render" method not found in widget');
        }

        return require('raptor' + '-renderer')
            .render(this, data, context)
            .replace(this.el);
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
    }
};

widgetProto.on = widgetProto.subscribe;
widgetProto.elId = widgetProto.getElId;

module.exports = Widget;