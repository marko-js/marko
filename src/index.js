var EventEmitter = require('events').EventEmitter;

var markoVdom = require('marko-vdom');
var createElement = markoVdom.createElement;
var createDocumentFragment = markoVdom.createDocumentFragment;
var createComment = markoVdom.createComment;
var createText = markoVdom.createText;
var virtualize = require('marko-vdom/virtualize');
var specialHtmlRegexp = /[&<]/;

function State(tree) {
    this.remaining = 1;
    this.events = new EventEmitter();
    this.tree = tree;
    this.finished = false;
}

function AsyncVDOMBuilder(globalData, rootNode, state) {
    var parentNode = rootNode;

    if (!parentNode) {
        parentNode = createDocumentFragment();
    }

    var finalState = state;

    if (finalState) {
        finalState.remaining++;
    } else {
        finalState = new State(parentNode);
    }

    this._state = finalState;
    this._parent = parentNode;
    this.global = globalData || {};
    this._stack = [parentNode];
}

var range;

var proto = AsyncVDOMBuilder.prototype = {
    element: function(name, attr, childCount) {
        var element = createElement(name, attr, childCount);

        var parent = this._parent;

        if(parent) {
            parent.appendChild(element);
        }

        return childCount > 0 ? element : this;
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
        if(!--state.remaining) {
            state.finished = true;
            state.events.emit('finish', state.tree);
        }
    },

    beginAsync: function() {
        if (this._isSync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        var documentFragment = this._parent.appendDocumentFragment();
        return new AsyncVDOMBuilder(this.global, documentFragment, this._state);
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
        this._isSync = true;
    },

    document: typeof document !== 'undefined' && document
};

proto.e = proto.element;
proto.be = proto.beginElement;
proto.ee = proto.endElement;
proto.t = proto.text;
proto.h = proto.write = proto.html;

exports.AsyncVDOMBuilder = AsyncVDOMBuilder;