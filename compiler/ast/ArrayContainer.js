'use strict';

var ok = require('assert').ok;
var isArray = Array.isArray;
var Container = require('./Container');

class ArrayContainer extends Container {
    constructor(node, array) {
        super(node);
        this.items = array;
    }

    forEach(callback, thisObj) {
        var array = this.array.concat([]);
        for (var i=0; i<array.length; i++) {
            var item = array[i];
            if (item.container === this) {
                callback.call(thisObj, item, i);
            }
        }
    }

    replaceChild(newChild, oldChild) {
        ok(newChild, 'Invalid child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === oldChild) {
                array[i] = newChild;
                oldChild.container = null;
                newChild.container = this;
                return true;
            }
        }

        return false;
    }

    removeChild(child) {
        var childIndex = this.array.indexOf(child);
        if (childIndex !== -1) {
            this.array.splice(childIndex, 1);
        }
        child.container = null;
    }

    prependChild(newChild) {
        ok(newChild, 'Invalid child');
        this.array.unshift(newChild);
        newChild.container = this;
    }

    appendChild(newChild) {
        ok(newChild, 'Invalid child');
        this.array.push(newChild);
        newChild.container = this;
    }

    insertChildBefore(newChild, referenceNode) {
        ok(newChild, 'Invalid child');
        ok(referenceNode, 'Invalid reference child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === referenceNode) {
                array.splice(i, 0, newChild);
                return;
            }
        }

        throw new Error('Reference node not found');
    }

    insertChildAfter(newChild, referenceNode) {
        ok(newChild, 'Invalid child');
        ok(referenceNode, 'Invalid reference child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === referenceNode) {
                array.splice(i+1, 0, newChild);
                return;
            }
        }

        throw new Error('Reference node not found');
    }

    forEachNextSibling(node, callback, thisObj) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array.concat([]);
        var found = false;

        for (var i=0; i<array.length; i++) {
            var curNode = array[i];
            if (curNode.container !== this) {
                continue;
            }
            if (found) {
                if (curNode.container === this) {
                    var keepGoing = callback.call(thisObj, curNode) !== false;
                    if (!keepGoing) {
                        return;
                    }
                }
            } else if (curNode === node) {
                found = true;
                continue;
            }
        }
    }

    get length() {
        return this.array.length;
    }

    get items() {
        return this.array;
    }

    set items(newItems) {
        if (newItems) {
            ok(isArray(newItems), 'Invalid array');

            for (let i=0; i<newItems.length; i++) {
                newItems[i].container = this;
            }
        }
        this.array = newItems || [];
    }
}

module.exports = ArrayContainer;