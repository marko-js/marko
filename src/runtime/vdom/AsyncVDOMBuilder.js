var EventEmitter = require('events-light');
var vdom = require('./vdom');
var VElement = vdom.___VElement;
var VDocumentFragment = vdom.___VDocumentFragment;
var VComment = vdom.___VComment;
var VText = vdom.___VText;
var VComponent = vdom.___VComponent;
var virtualizeHTML = vdom.___virtualizeHTML;
var RenderResult = require('../RenderResult');
var defaultDocument = vdom.___defaultDocument;
var morphdom = require('../../morphdom');

var EVENT_UPDATE = 'update';
var EVENT_FINISH = 'finish';

function State(tree) {

    this.___events = new EventEmitter();
    this.___tree = tree;
    this.___finished = false;
}

function AsyncVDOMBuilder(globalData, parentNode, parentOut) {
    if (!parentNode) {
        parentNode = new VDocumentFragment();
    }

    var state;

    if (parentOut) {
        state = parentOut.___state;
    } else {
        state = new State(parentNode);
    }

    this.___remaining = 1;
    this.___lastCount = 0;
    this.___last = null;
    this.___parentOut = parentOut;


    this.data = {};
    this.___state = state;
    this.___parent = parentNode;
    this.global = globalData || {};
    this.___stack = [parentNode];
    this.___sync = false;
    this.___vnode = undefined;
    this.___components = null;

    this.___assignedComponentDef = null;
    this.___assignedKey = null;
    this.___assignedCustomEvents = null;
}

var proto = AsyncVDOMBuilder.prototype = {
    ___isOut: true,
    ___document: defaultDocument,

    bc: function(component) {
        var vComponent = new VComponent(component);
        return this.___beginNode(vComponent, 0, true);
    },

    ___preserveComponent: function(component) {
        var vComponent = new VComponent(component, true);
        this.___beginNode(vComponent, 0);
    },

    ___beginNode: function(child, childCount, pushToStack) {
        this.___parent.___appendChild(child);
        if (pushToStack === true) {
            this.___stack.push(child);
            this.___parent = child;
        }
        return childCount === 0 ? this : child;
    },

    element: function(tagName, attrs, key, component, childCount, flags, props) {
        var element = new VElement(tagName, attrs, key, component, childCount, flags, props);
        return this.___beginNode(element, childCount);
    },

    ___elementDynamicTag: function(tagName, attrs, key, component, childCount, flags, props) {
        var element = VElement.___createElementDynamicTag(tagName, attrs, key, component, childCount, flags, props);
        return this.___beginNode(element, childCount);
    },

    n: function(node, component) {
        // NOTE: We do a shallow clone since we assume the node is being reused
        //       and a node can only have one parent node.
        var clone = node.___cloneNode();
        this.node(clone);
        clone.___component = component;

        return this;
    },

    node: function(node) {
        this.___parent.___appendChild(node);
        return this;
    },

    text: function(text) {
        var type = typeof text;

        if (type != 'string') {
            if (text == null) {
                return;
            } else if (type === 'object') {
                if (text.toHTML) {
                    return this.h(text.toHTML());
                }
            }

            text = text.toString();
        }

        this.___parent.___appendChild(new VText(text));
        return this;
    },

    comment: function(comment) {
        return this.node(new VComment(comment));
    },

    html: function(html) {
        if (html != null) {
            var vdomNode = virtualizeHTML(html, this.___document || document);
            this.node(vdomNode);
        }

        return this;
    },

    beginElement: function(tagName, attrs, key, component, childCount, flags, props) {
        var element = new VElement(tagName, attrs, key, component, childCount, flags, props);
        this.___beginNode(element, childCount, true);
        return this;
    },

    ___beginElementDynamicTag: function(tagName, attrs, key, component, childCount, flags, props) {
        var element = VElement.___createElementDynamicTag(tagName, attrs, key, component, childCount, flags, props);
        this.___beginNode(element, childCount, true);
        return this;
    },

    endElement: function() {
        var stack = this.___stack;
        stack.pop();
        this.___parent = stack[stack.length-1];
    },

    end: function() {
        this.___parent = undefined;

        var remaining = --this.___remaining;
        var parentOut = this.___parentOut;

        if (remaining === 0) {
            if (parentOut) {
                parentOut.___handleChildDone();
            } else {
                this.___doFinish();
            }
        } else if (remaining - this.___lastCount === 0) {
            this.___emitLast();
        }

        return this;
    },

    ___handleChildDone: function() {
        var remaining = --this.___remaining;

        if (remaining === 0) {
            var parentOut = this.___parentOut;
            if (parentOut) {
                parentOut.___handleChildDone();
            } else {
                this.___doFinish();
            }
        } else if (remaining - this.___lastCount === 0) {
            this.___emitLast();
        }
    },

    ___doFinish: function() {
        var state = this.___state;
        state.___finished = true;
        state.___events.emit(EVENT_FINISH, this.___getResult());
    },

    ___emitLast: function() {
        var lastArray = this._last;

        var i = 0;

        function next() {
            if (i === lastArray.length) {
                return;
            }
            var lastCallback = lastArray[i++];
            lastCallback(next);

            if (!lastCallback.length) {
                next();
            }
        }

        next();
    },

    error: function(e) {
        try {
            this.emit('error', e);
        } finally {
            // If there is no listener for the error event then it will
            // throw a new Error here. In order to ensure that the async fragment
            // is still properly ended we need to put the end() in a `finally`
            // block
            this.end();
        }

        return this;
    },

    beginAsync: function(options) {
        if (this.___sync) {
            throw Error('Not allowed');
        }

        var state = this.___state;

        if (options) {
            if (options.last) {
                this.___lastCount++;
            }
        }

        this.___remaining++;

        var documentFragment = this.___parent.___appendDocumentFragment();
        var asyncOut = new AsyncVDOMBuilder(this.global, documentFragment, this);

        state.___events.emit('beginAsync', {
           out: asyncOut,
           parentOut: this
       });

       return asyncOut;
    },

    createOut: function() {
        return new AsyncVDOMBuilder(this.global);
    },

    flush: function() {
        var events = this.___state.___events;

        if (events.listenerCount(EVENT_UPDATE)) {
            events.emit(EVENT_UPDATE, new RenderResult(this));
        }
    },

    ___getOutput: function() {
        return this.___state.___tree;
    },

    ___getResult: function() {
        return this.___result || (this.___result = new RenderResult(this));
    },

    on: function(event, callback) {
        var state = this.___state;

        if (event === EVENT_FINISH && state.___finished) {
            callback(this.___getResult());
        } else if (event === 'last') {
            this.onLast(callback);
        } else {
            state.___events.on(event, callback);
        }

        return this;
    },

    once: function(event, callback) {
        var state = this.___state;

        if (event === EVENT_FINISH && (state.___finished)) {
            callback(this.___getResult());
        } else if (event === 'last') {
            this.onLast(callback);
        } else {
            state.___events.once(event, callback);
        }

        return this;
    },

    emit: function(type, arg) {
        var events = this.___state.___events;
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
        var events = this.___state.___events;
        events.removeListener.apply(events, arguments);
        return this;
    },

    sync: function() {
        this.___sync = true;
    },

    isSync: function() {
        return this.___sync;
    },

    onLast: function(callback) {
        var lastArray = this._last;

        if (lastArray === undefined) {
            this._last = [callback];
        } else {
            lastArray.push(callback);
        }

        return this;
    },

    ___getNode: function(doc) {
        var node = this.___vnode;
        if (!node) {
            var vdomTree = this.___getOutput();
            // Create the root document fragment node
            doc = doc || this.___document || document;
            this.___vnode = node = vdomTree.___actualize(doc);
            morphdom(node, null, null, vdomTree, doc, this.___components);
        }
        return node;
    },

    toString: function(doc) {
        var docFragment = this.___getNode(doc);
        var html = '';

        var child = docFragment.firstChild;
        while(child) {
            var nextSibling = child.nextSibling;
            if (child.nodeType != 1) {
                var container = docFragment.ownerDocument.createElement('div');
                container.appendChild(child.cloneNode());
                html += container.innerHTML;
            } else {
                html += child.outerHTML;
            }

            child = nextSibling;
        }

        return html;
    },

    then: function(fn, fnErr) {
        var out = this;
        var promise = new Promise(function(resolve, reject) {
            out.on('error', reject)
                .on(EVENT_FINISH, function(result) {
                    resolve(result);
                });
        });

        return Promise.resolve(promise).then(fn, fnErr);
    },

    catch: function(fnErr) {
        return this.then(undefined, fnErr);
    },

    isVDOM: true,

    c: function(componentDef, key, customEvents) {
        this.___assignedComponentDef = componentDef;
        this.___assignedKey = key;
        this.___assignedCustomEvents = customEvents;
    }
};

proto.e = proto.element;
proto.ed = proto.___elementDynamicTag;
proto.be = proto.beginElement;
proto.bed = proto.___beginElementDynamicTag;
proto.ee = proto.endElement;
proto.t = proto.text;
proto.h = proto.w = proto.write = proto.html;

module.exports = AsyncVDOMBuilder;
