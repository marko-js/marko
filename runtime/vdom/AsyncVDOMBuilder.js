var EventEmitter = require('events').EventEmitter;
var dom = require('marko-dom');
var markoVdom = require('marko-vdom');
var createElement = markoVdom.createElement;
var createDocumentFragment = markoVdom.createDocumentFragment;
var createComment = markoVdom.createComment;
var createText = markoVdom.createText;
var virtualize = require('marko-vdom/virtualize');
var specialHtmlRegexp = /[&<]/;
var defaultDocument = typeof document != 'undefined' && document;

function checkAddedToDOM(asyncStream, method) {
    if (!asyncStream.data._added) {
        throw new Error('Cannot call ' + method + '() until after HTML fragment is added to DOM.');
    }
}

function getWidgetDefs(out) {
    var widgetDefs = out.data.widgets;

    if (!widgetDefs || widgetDefs.length === 0) {
        throw new Error('No widget rendered');
    }
    return widgetDefs;
}

function State(tree) {
    this.remaining = 1;
    this.events = new EventEmitter();
    this.tree = tree;
    this.finished = false;
    this.last = undefined;
    this.lastFired = false;
    this.lastCount = 0;
}

function AsyncVDOMBuilder(globalData, parentNode, state) {
    if (!parentNode) {
        parentNode = createDocumentFragment();
    }

    if (state) {
        state.remaining++;
    } else {
        state = new State(parentNode);
    }

    this.data = {};
    this._state = state;
    this._parent = parentNode;
    this.global = globalData || {};
    this._stack = [parentNode];
    this._sync = false;
}

var range;

var proto = AsyncVDOMBuilder.prototype = {
    isAsyncVDOMBuilder: true,

    element: function(name, attrs, childCount) {
        var element = createElement(name, attrs, childCount);

        var parent = this._parent;

        if(parent) {
            parent.appendChild(element);
        }

        return childCount === 0 ? this : element;
    },

    n: function(node) {
        // NOTE: We do a shallow clone since we assume the node is being reused
        //       and a node can only have one parent node.
        return this.node(node.cloneNode());
    },

    node: function(node) {
        var parent = this._parent;
        if (parent) {
            parent.appendChild(node);
        }
        return this;
    },

    text: function(text) {
        var parent = this._parent;
        if (parent) {
            var lastChild = parent.lastChild;
            if (lastChild && lastChild.nodeType === 3) {
                lastChild.nodeValue += text;
            } else {
                parent.appendChild(createText(text));
            }
        }
        return this;
    },

    comment: function(comment) {
        return this.node(createComment(comment));
    },

    html: function(html) {
        if (!specialHtmlRegexp.test(html)) {
            return this.text(html);
        }

        var document = this.document;

        if (!range && document.createRange) {
            range = document.createRange();
            range.selectNode(document.body);
        }

        var vdomFragment;

        var fragment;
        if (range && range.createContextualFragment) {
            fragment = range.createContextualFragment(html);
            vdomFragment = virtualize(fragment);
        } else {
            var container = document.createElement('body');
            container.innerHTML = html;

            var curChild = container.firstChild;
            if (curChild) {
                vdomFragment = createDocumentFragment();
                while(curChild) {
                    vdomFragment.appendChild(virtualize(curChild));
                    curChild = curChild.nextSibling;
                }
            }
        }

        if (vdomFragment) {
            this.node(vdomFragment);
        }

        return this;
    },

    beginElement: function(name, attrs) {
        var element = createElement(name, attrs);
        var parent = this._parent;
        if (parent) {
            parent.appendChild(element);
            this._stack.push(element);
            this._parent = element;
        }
        return this;
    },

    endElement: function() {
        var stack = this._stack;
        stack.pop();
        this._parent = stack[stack.length-1];
    },

    end: function() {
        var state = this._state;

        this._parent = null;

        var remaining = --state.remaining;

        if (!state.lastFired && (remaining - state.lastCount === 0)) {
            state.lastFired = true;
            state.lastCount = 0;
            state.events.emit('last');
        }

        if (!remaining) {
            state.finished = true;
            state.events.emit('finish', state.tree);
        }

        return this;
    },

    beginAsync: function(options) {
        if (this._sync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        var state = this._state;

        if (options) {
            if (options.last === true) {
                state.lastCount++;
            }
        }

        var documentFragment = this._parent.appendDocumentFragment();
        var asyncOut = new AsyncVDOMBuilder(this.global, documentFragment, state);

        state.events.emit('beginAsync', {
           out: asyncOut,
           parentOut: this
       });

       return asyncOut;
    },

    createOut: function(callback) {
        return new AsyncVDOMBuilder(this.global);
    },

    flush: function() {
        var state = this._state;
        state.events.emit('update', state.tree);
    },

    getOutput: function() {
        return this._state.tree;
    },

    on: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished) {
            callback(state.tree);
            return this;
        }

        state.events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished) {
            callback(state.tree);
            return this;
        }

        state.events.once(event, callback);
        return this;
    },

    emit: function(type, arg) {
        var events = this._state.events;
        switch(arguments.length) {
            case 1:
                events.emit(type);
                break;
            case 2:
                events.emit(type, arg);
                break;
            default:
                events.emit.apply(events, arguments);
                break;
        }
        return this;
    },

    removeListener: function() {
        var events = this._state.events;
        events.removeListener.apply(events, arguments);
        return this;
    },

    prependListener: function() {
        var events = this._state.events;
        events.prependListener.apply(events, arguments);
        return this;
    },

    sync: function() {
        this._sync = true;
    },

    onLast: function(callback) {
        var state = this._state;

        var lastArray = state.last;

        if (!lastArray) {
            lastArray = state.last = [];
            var i = 0;
            var next = function next() {
                if (i === lastArray.length) {
                    return;
                }
                var _next = lastArray[i++];
                _next(next);
            };

            this.once('last', function() {
                next();
            });
        }

        lastArray.push(callback);
        return this;
    },

    // BEGIN DOM METHODS
    getWidget: function() {
        checkAddedToDOM(this, 'getWidget');

        var rerenderWidget = this.global.__rerenderWidget;
        if (rerenderWidget) {
            return rerenderWidget;
        }

        return getWidgetDefs(this)[0].widget;
    },
    getWidgets: function(selector) {
        checkAddedToDOM(this, 'getWidgets');

        var widgetDefs = getWidgetDefs(this);

        var widgets;
        var i;
        if (selector) {
            // use the selector to find the widgets that the caller wants
            widgets = [];
            for (i = 0; i < widgetDefs.length; i++) {
                var widget = widgetDefs[i].widget;
                if (selector(widget)) {
                    widgets.push(widget);
                }
            }
        } else {
            // return all widgets
            widgets = new Array(widgetDefs.length);
            for (i = 0; i < widgetDefs.length; i++) {
                widgets[i] = widgetDefs[i].widget;
            }
        }
        return widgets;
    },

    afterInsert: function(node) {
        var data = this.data;
        data._added = true;

        var widgetsContext = this.global.widgets;
        var widgetDefs = widgetsContext ? widgetsContext.widgets : null;

        data.widgets = widgetDefs;

        dom.emit('renderedToDOM', {
            node: node,
            out: this,
            document: node.ownerDocument
        });    // NOTE: This will trigger widgets to be initialized if there were any

        return this;
    },

    appendTo: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.appendTo(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    replace: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.replace(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    replaceChildrenOf: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.replaceChildrenOf(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    insertBefore: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.insertBefore(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    insertAfter: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.insertAfter(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    prependTo: function(referenceEl) {
        var newNode = this.getNode(referenceEl.ownerDocument);
        dom.prependTo(newNode, referenceEl);
        return this.afterInsert(newNode);
    },
    getNode: function(doc) {
        var node = this._node;
        if (!node) {
            var vdomTree = this.getOutput();

            if (!doc) {
                doc = this.document || defaultDocument;
            }

            node = vdomTree.actualize(doc);

            if (node.nodeType === 11 /* DocumentFragment */) {
                // If the DocumentFragment only has one child
                // then just return that first child as the node
                var childNodes = node.childNodes;
                if (childNodes.length === 1) {
                    node = childNodes[0];
                }
            }

            this._node = node;
        }
        return node;
    },

    // END DOM METHODS


    document: typeof document !== 'undefined' && document,

    isVDOM: true
};

proto.e = proto.element;
proto.be = proto.beginElement;
proto.ee = proto.endElement;
proto.t = proto.text;
proto.h = proto.write = proto.html;

module.exports = AsyncVDOMBuilder;