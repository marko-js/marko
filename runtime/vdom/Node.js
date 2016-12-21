/* jshint newcap:false */

var DocumentFragment;

function assignNamespace(node, namespaceURI) {
    node.namespaceURI = namespaceURI;

    var curChild = node.$__firstChild;
    while(curChild) {
        if (curChild.$__nsAware) {
            assignNamespace(curChild, namespaceURI);
        }
        curChild = curChild.$__nextSibling;
    }
}

function Node(finalChildCount) {
    this.$__finalChildCount = finalChildCount;
    this.$__childCount = 0;
    this.$__firstChild = undefined;
    this.$__lastChild = undefined;
    this.$__parentNode = undefined;
    this.$__nextSibling = undefined;
}

Node.prototype = {
    removeChildren: function() {
        this.$__firstChild = undefined;
        this.$__childCount = 0;
        this.$__lastChild = undefined;
    },

    get firstChild() {
        var firstChild = this.$__firstChild;

        if (firstChild && firstChild.nodeType === 11 /* DocumentFragment */) {
            var nestedFirstChild = firstChild.firstChild;
            // The first child is a DocumentFragment node.
            // If the DocumentFragment node has a first child then we will return that.
            // Otherwise, the DocumentFragment node is not *really* the first child and
            // we need to skip to its next sibling
            return nestedFirstChild || firstChild.nextSibling;
        }

        return firstChild;
    },

    get lastChild() {
        var lastChild = this.$__lastChild;

        if (lastChild && lastChild.nodeType === 11 /* DocumentFragment */) {
            return lastChild.lastChild;
        }

        return lastChild;
    },

    get nextSibling() {
        var nextSibling = this.$__nextSibling;

        if (nextSibling) {
            if (nextSibling.nodeType === 11 /* DocumentFragment */) {
                var firstChild = nextSibling.firstChild;
                return firstChild || nextSibling.nextSibling;
            }
        } else {
            var parentNode = this.$__parentNode;
            if (parentNode && parentNode.nodeType === 11) {
                return parentNode.nextSibling;
            }
        }

        return nextSibling;
    },

    $__appendDocumentFragment: function() {
        return this.$__appendChild(new DocumentFragment());
    },

    $__appendChild: function(child) {
        if (this.$__isTextArea) {
            if (child.nodeType === 3) {
                var currentValue = this.value;
                this.value = currentValue ? currentValue + child.nodeValue : child.nodeValue;
            } else {
                throw TypeError();
            }
        } else {
            var namespaceURI;

            if (child.$__nsAware && (namespaceURI = this.namespaceURI) && !child.namespaceURI) {
                assignNamespace(child, namespaceURI);
            }

            this.$__childCount++;

            var lastChild = this.$__lastChild;

            child.$__parentNode = this;

            if (lastChild) {
                lastChild.$__nextSibling = child;
            } else {
                this.$__firstChild = child;
            }

            this.$__lastChild = child;
        }

        return child;
    },

    $__finishChild: function finishChild() {
        if (this.$__childCount === this.$__finalChildCount && this.$__parentNode) {
            return this.$__parentNode.$__finishChild();
        } else {
            return this;
        }
    }

    // ,toJSON: function() {
    //     var clone = Object.assign({
    //         nodeType: this.nodeType
    //     }, this);
    //
    //     for (var k in clone) {
    //         if (k.startsWith('_')) {
    //             delete clone[k];
    //         }
    //     }
    //     delete clone._nextSibling;
    //     delete clone._lastChild;
    //     delete clone.parentNode;
    //     return clone;
    // }
};

module.exports = Node;

DocumentFragment = require('./DocumentFragment');