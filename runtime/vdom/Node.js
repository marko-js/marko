var EMPTY_ARRAY = require('./util').EMPTY_ARRAY;

var DocumentFragment;

function assignNamespace(node, namespaceURI) {
    node.namespaceURI = namespaceURI;
    var childNodes = node.$__childNodes;
    var childCount = node.$__childCount;

    for (var i=0; i<childCount; i++) {
        var child = childNodes[i];
        if (child.$__nsAware) {
            assignNamespace(childNodes[i], namespaceURI);
        }
    }
}

function Node(finalChildCount) {
    if (finalChildCount !== -1) {
        var childNodes;
        var firstChild;
        var lastChild;

        if (finalChildCount === 0) {
            childNodes = EMPTY_ARRAY;
        } else if (finalChildCount > 0) {
            childNodes = new Array(finalChildCount);
        } else {
            childNodes = [];
        }

        this.$__childNodes = childNodes;
        this.$__finalChildCount = finalChildCount;
        this.$__childCount = 0;
        this.$__firstChild = firstChild;
        this.$__lastChild = lastChild;
    }

    this.$__parentNode = undefined;
    this.$__nextSibling = undefined;
}

Node.prototype = {
    removeChildren: function() {
        this.$__childNodes.length = 0;
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

    appendDocumentFragment: function() {
        return this.appendChild(new DocumentFragment());
    },

    appendChild: function(child) {
        if (this.$__isTextArea) {
            if (child.nodeType === 3) {
                var currentValue = this.value;
                this.value = currentValue ? currentValue + child.nodeValue : child.nodeValue;
            } else {
                throw new Error('Invalid child');
            }
        } else {
            var namespaceURI;

            if (child.$__nsAware && (namespaceURI = this.namespaceURI) && !child.namespaceURI) {
                assignNamespace(child, namespaceURI);
            }

            var index = this.$__childCount++;
            this.$__childNodes[index] = child;

            child.$__parentNode = this;

            if (index === 0) {
                this.$__firstChild = child;
            } else {
                this.$__lastChild.$__nextSibling = child;
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