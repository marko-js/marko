var EventEmitter = require('events').EventEmitter;
var HTMLElement = require('./HTMLElement');
var DocumentFragment = require('./DocumentFragment');
var Comment = require('./Comment');
var Text = require('./Text');
var virtualizeHTML = require('./virtualizeHTML');
var documentProvider = require('../document-provider');
var RenderResult = require('../RenderResult');

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
        parentNode = new DocumentFragment();
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

var proto = AsyncVDOMBuilder.prototype = {
    isAsyncOut: true,
    isAsyncVDOMBuilder: true,

    element: function(name, attrs, childCount) {
        var element = new HTMLElement(name, attrs, childCount);

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
        var type = typeof text;

        if (type !== 'string') {
            if (text == null) {
                return;
            } else if (type === 'object') {
                var safeHTML = text.safeHTML;
                if (safeHTML) {
                    var html = typeof safeHTML === 'function' ? text.safeHTML() : safeHTML;
                    return this.html(html);
                }
            } else {
                text = text.toString();
            }
        }

        var parent = this._parent;
        if (parent) {
            var lastChild = parent.lastChild;
            if (lastChild && lastChild.nodeType === 3) {
                lastChild.nodeValue += text;
            } else {
                parent.appendChild(new Text(text));
            }
        }
        return this;
    },

    comment: function(comment) {
        return this.node(new Comment(comment));
    },

    html: function(html) {
        if (html != null) {
            var vdomNode = virtualizeHTML(html, documentProvider.document);
            this.node(vdomNode);
        }

        return this;
    },

    beginElement: function(name, attrs) {
        var element = new HTMLElement(name, attrs);
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
            state.events.emit('finish', this);
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
        state.events.emit('update', this);
    },

    getOutput: function() {
        return this._state.tree;
    },

    getResult: function() {
        this._result = this._result || new RenderResult(this);
        return this._result;
    },

    on: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished) {
            callback(this);
            return this;
        }

        state.events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished) {
            callback(this);
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

    isSync: function() {
        return this._sync === true;
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

    getNode: function(doc) {
        var node = this._node;
        if (!node) {
            var vdomTree = this.getOutput();

            if (!doc) {
                doc = documentProvider.document;
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

    toString: function() {
        return this.getNode().outerHTML;
    },

    then: function(fn, fnErr) {
        var out = this;
        var promise = new Promise(function(resolve, reject) {
            out.on('error', reject);
            out.on('finish', function() {
                resolve(out.getResult());
            });
        });

        return Promise.resolve(promise).then(fn, fnErr);
    },

    catch: function(fnErr) {
        return this.then(undefined, fnErr);
    },

    isVDOM: true
};

proto.e = proto.element;
proto.be = proto.beginElement;
proto.ee = proto.endElement;
proto.t = proto.text;
proto.h = proto.write = proto.html;

module.exports = AsyncVDOMBuilder;