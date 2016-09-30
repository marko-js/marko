var EventEmitter = require('events').EventEmitter;

var createElement = require('marko-vdom').createElement;
var createDocumentFragment = require('marko-vdom').createDocumentFragment;
var createComment = require('marko-vdom').createComment;
var createText = require('marko-vdom').createText;

function AsyncVDOMBuilder(node, global, root) {
    this.global = global;
    this._node = node || createDocumentFragment();
    this._root = root || this;

    if(!root) {
        this._state = { remaining:0 };
        this._events = new EventEmitter();
        this._tree = this._node;
    }

    this._root._state.remaining++;
}

var proto = AsyncVDOMBuilder.prototype;

proto.element = function(name, attr, childCount) {
    var element = createElement(name, attr, childCount);
    if(this._node) {
        this._node.appendChild(element);
    }
    return element;
}

proto.node = function(node) {
    if(this._node) {
        this._node.appendChild(node);
    }
    return this;
}

proto.text = function(text) {
    var textNode = createText(text);
    if(this._node) {
        this._node.appendChild(textNode);
    }
    return textNode;
}

proto.comment = function(comment) {
    var commentNode = createComment(comment)
    if(this._node) {
        this._node.appendChild(commentNode);
    }
    return commentNode;
}

proto.beginElement = function(name, attr) {
    var element = createElement(name, attr);
    if(this._node) {
        this._node.appendChild(element);
        this._stack = this._stack || [];
        this._stack.push(this._node);
        this._node = element;
    }
    return element;
}

proto.endElement = function() {
    this._node = this._stack.pop();
}

proto.end = function() {
    this._node = null;
    if(!--this._root._state.remaining) {
        this._root.finished = true;
        this._root._events.emit('finish', this._root._tree);
    }
}

proto.beginAsync = function() {
    var documentFragment = this._node.appendDocumentFragment();
    return new AsyncVDOMBuilder(documentFragment, this.global, this._root);
}

proto.flush = function() {
    this._root._events.emit('update', this._root._tree);
}

proto.getOutput = function() {
    return this._root._tree;
}

proto.on = function(event, callback) {
    if (event === 'finish' && this._root.finished) {
        callback(this._root._tree);
        return this;
    }

    this._root._events.on(event, callback);
    return this;
}

proto.once = function(event, callback) {
    if (event === 'finish' && this._root.finished) {
        callback(this._root._tree);
        return this;
    }

    this._root._events.once(event, callback);
    return this;
}

proto.e = proto.element;
proto.be = proto.beginElement;
proto.ee = proto.endElement;
proto.t = proto.text;
proto.n = proto.node;

module.exports = AsyncVDOMBuilder;