'use strict';

var ok = require('assert').ok;
var isArray = Array.isArray;
var Container = require('./Container');

class ArrayContainer extends Container {
    constructor(node, array) {
        super(node);
        if (array) {
            ok(isArray(array), 'Invalid array');

            for (let i=0; i<array.length; i++) {
                array[i].container = this;
            }
        }
        this.array = array || [];
    }

    // forEach(callback, thisObj) {
    //     var array = this.array;
    //
    //     for (var i=0; i<array.length; i++) {
    //         var item = array[i];
    //         if (item == null) {
    //             throw new Error('Invalid node in container at index ' + i + '. Array: ' + JSON.stringify(array, null, 2));
    //         }
    //         callback.call(thisObj, item, i);
    //     }
    // }

    forEach(callback, thisObj) {
        var array = this.array;
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

    appendChild(newChild) {
        ok(newChild, 'Invalid child');
        this.array.push(newChild);
        newChild.container = this;
    }

    forEachNextSibling(node, callback, thisObj) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array;
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
}

module.exports = ArrayContainer;