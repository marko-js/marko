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
        ok(newChild, '"newChild" is required"');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === oldChild) {
                array[i] = newChild;
                oldChild.detach();
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
            child.detach();
            return true;
        } else {
            return false;
        }
    }

    prependChild(newChild) {
        ok(newChild, '"newChild" is required"');
        this.array.unshift(newChild);
        newChild.container = this;
    }

    appendChild(newChild) {
        ok(newChild, '"newChild" is required"');
        newChild.detach();
        this.array.push(newChild);
        newChild.container = this;
    }

    insertChildBefore(newChild, referenceNode) {
        ok(newChild, '"newChild" is required"');
        ok(referenceNode, 'Invalid reference child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === referenceNode) {
                array.splice(i, 0, newChild);
                newChild.container = this;
                return;
            }
        }

        throw new Error('Reference node not found');
    }

    insertChildAfter(newChild, referenceNode) {
        ok(newChild, '"newChild" is required"');
        ok(referenceNode, 'Invalid reference child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === referenceNode) {
                array.splice(i+1, 0, newChild);
                newChild.container = this;
                return;
            }
        }

        throw new Error('Reference node not found');
    }

    moveChildrenTo(target) {
        ok(target.appendChild, 'Node does not support appendChild(node): ' + target);

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            curChild.container = null; // Detach the child from this container
            target.appendChild(curChild);
        }

        this.array.length = 0; // Clear out this container
    }

    getPreviousSibling(node) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array;



        for (var i=0; i<array.length; i++) {
            var curNode = array[i];
            if (curNode.container !== this) {
                continue;
            }

            if (curNode === node) {
                return i-1 >= 0 ? array[i-1] : undefined;
            }
        }
    }

    getNextSibling(node) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array;

        for (var i=0; i<array.length; i++) {
            var curNode = array[i];
            if (curNode.container !== this) {
                continue;
            }

            if (curNode === node) {
                return i+1 < array.length ? array[i+1] : undefined;
            }
        }
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

    get firstChild() {
        return this.array[0];
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
