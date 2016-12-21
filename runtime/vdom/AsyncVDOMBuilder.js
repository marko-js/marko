var EventEmitter = require('events-light');
var HTMLElement = require('./HTMLElement');
var DocumentFragment = require('./DocumentFragment');
var Comment = require('./Comment');
var Text = require('./Text');
var virtualizeHTML = require('./virtualizeHTML');
var documentProvider = require('../document-provider');
var RenderResult = require('../RenderResult');

var FLAG_FINISHED = 1;
var FLAG_LAST_FIRED = 2;

function State(tree) {
    this.$__remaining = 1;
    this.$__events = new EventEmitter();
    this.$__tree = tree;
    this.$__last = undefined;
    this.$__lastCount = 0;
    this.$__flags = 0;
}

function AsyncVDOMBuilder(globalData, parentNode, state) {
    if (!parentNode) {
        parentNode = new DocumentFragment();
    }

    if (state) {
        state.$__remaining++;
    } else {
        state = new State(parentNode);
    }

    this.data = {};
    this.$__state = state;
    this.$__parent = parentNode;
    this.global = globalData || {};
    this.$__stack = [parentNode];
    this.$__sync = false;
}

var proto = AsyncVDOMBuilder.prototype = {
    isOut: true,

    element: function(name, attrs, childCount) {
        var element = new HTMLElement(name, attrs, childCount);

        var parent = this.$__parent;

        if(parent) {
            parent.$__appendChild(element);
        }

        return childCount === 0 ? this : element;
    },

    n: function(node) {
        // NOTE: We do a shallow clone since we assume the node is being reused
        //       and a node can only have one parent node.
        return this.node(node.cloneNode());
    },

    node: function(node) {
        var parent = this.$__parent;
        if (parent) {
            parent.$__appendChild(node);
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

        var parent = this.$__parent;
        if (parent) {
            var lastChild = parent.lastChild;
            if (lastChild && lastChild.nodeType === 3) {
                lastChild.nodeValue += text;
            } else {
                parent.$__appendChild(new Text(text));
            }
        }
        return this;
    },

    comment: function(comment) {
        return this.node(new Comment(comment));
    },

    html: function(html) {
        if (html != null) {
            var vdomNode = virtualizeHTML(html, documentProvider.$__document);
            this.node(vdomNode);
        }

        return this;
    },

    beginElement: function(name, attrs) {
        var element = new HTMLElement(name, attrs);
        var parent = this.$__parent;
        if (parent) {
            parent.$__appendChild(element);
            this.$__stack.push(element);
            this.$__parent = element;
        }
        return this;
    },

    endElement: function() {
        var stack = this.$__stack;
        stack.pop();
        this.$__parent = stack[stack.length-1];
    },

    end: function() {
        var state = this.$__state;

        this.$__parent = null;

        var remaining = --state.$__remaining;

        if (!(state.$__flags & FLAG_LAST_FIRED) && (remaining - state.$__lastCount === 0)) {
            state.$__flags |= FLAG_LAST_FIRED;
            state.$__lastCount = 0;
            state.$__events.emit('last');
        }

        if (!remaining) {
            state.$__flags |= FLAG_FINISHED;
            state.$__events.emit('finish', this);
        }

        return this;
    },

    beginAsync: function(options) {
        if (this.$__sync) {
            throw Error('Not allowed');
        }

        var state = this.$__state;

        if (options) {
            if (options.last) {
                state.$__lastCount++;
            }
        }

        var documentFragment = this.$__parent.$__appendDocumentFragment();
        var asyncOut = new AsyncVDOMBuilder(this.global, documentFragment, state);

        state.$__events.emit('beginAsync', {
           out: asyncOut,
           parentOut: this
       });

       return asyncOut;
    },

    createOut: function(callback) {
        return new AsyncVDOMBuilder(this.global);
    },

    flush: function() {
        var state = this.$__state;
        state.$__events.emit('update', this);
    },

    getOutput: function() {
        return this.$__state.$__tree;
    },

    getResult: function() {
        this.$__result = this.$__result || new RenderResult(this);
        return this.$__result;
    },

    on: function(event, callback) {
        var state = this.$__state;

        if (event === 'finish' && (state.$__flags & FLAG_FINISHED)) {
            callback(this);
            return this;
        }

        state.$__events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        var state = this.$__state;

        if (event === 'finish' && (state.$__flags & FLAG_FINISHED)) {
            callback(this);
            return this;
        }

        state.$__events.once(event, callback);
        return this;
    },

    emit: function(type, arg) {
        var events = this.$__state.$__events;
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
        var events = this.$__state.$__events;
        events.removeListener.apply(events, arguments);
        return this;
    },

    sync: function() {
        this.$__sync = true;
    },

    isSync: function() {
        return this.$__sync;
    },

    onLast: function(callback) {
        var state = this.$__state;

        var lastArray = state.$__last;

        if (!lastArray) {
            lastArray = state.$__last = [];
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
        var node = this.$__node;
        if (!node) {
            var vdomTree = this.getOutput();

            if (!doc) {
                doc = documentProvider.$__document;
            }

            node = vdomTree.actualize(doc);

            if (node.nodeType === 11 /* DocumentFragment */) {
                var firstChild = node.firstChild;
                if (firstChild) {
                    var nextSibling = firstChild.nextSibling;
                    if (!nextSibling) {
                        // If the DocumentFragment only has one child
                        // then just return that first child as the node
                        node = firstChild;
                    }
                }
            }

            this.$__node = node;
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