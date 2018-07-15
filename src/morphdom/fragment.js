var helpers = require("./helpers");
var constants = require("./constants");

var insertBefore = helpers.___insertBefore;

var TEXT_NODE = constants.___TEXT_NODE;
var COMPONENT_NODE = constants.___COMPONENT_NODE;

var fragmentPrototype = {
    get firstChild() {
        let firstChild = this.startNode.nextSibling;
        return firstChild === this.endNode ? undefined : firstChild;
    },
    get lastChild() {
        let lastChild = this.endNode.previousSibling;
        return lastChild === this.startNode ? undefined : lastChild;
    },
    get nextSibling() {
        return this.endNode.nextSibling;
    },
    get nodes() {
        const nodes = [];
        let current = this.startNode;
        while (current !== this.endNode) {
            nodes.push(current);
            current = current.nextSibling;
        }
        nodes.push(current);
        return nodes;
    },
    insertBefore(newChildNode, referenceNode) {
        const actualReference =
            referenceNode == null ? this.endNode : referenceNode;
        return insertBefore(
            newChildNode,
            actualReference,
            this.startNode.parentNode
        );
    },
    insertInto(newParentNode, referenceNode) {
        this.nodes.forEach(node =>
            insertBefore(node, referenceNode, newParentNode)
        );
        return this;
    },
    remove() {
        this.nodes.forEach(node => this.detachedContainer.appendChild(node));
    }
};

function createFragmentNode(startNode, nextNode, parentNode) {
    var fragment = Object.create(fragmentPrototype);
    fragment.startNode = document.createTextNode("");
    fragment.endNode = document.createTextNode("");
    fragment.startNode.fragment = fragment;
    fragment.endNode.fragment = fragment;
    var detachedContainer = (fragment.detachedContainer = document.createDocumentFragment());
    if (startNode) {
        parentNode = parentNode || startNode.parentNode || detachedContainer;
        insertBefore(fragment.startNode, startNode, parentNode);
        insertBefore(fragment.endNode, nextNode, parentNode);
    } else {
        detachedContainer.appendChild(fragment.startNode);
        detachedContainer.appendChild(fragment.endNode);
    }
    return fragment;
}

function createMatchingFragment(parentNode, startNode, virtualNode) {
    var numChildren = getNormalizedChildCount(virtualNode);
    var nextNode = startNode;

    while (numChildren--) nextNode = nextNode && nextNode.nextSibling;

    return createFragmentNode(startNode, nextNode, parentNode);
}

function getNormalizedChildCount(virtualNode) {
    return normalizeNodesToCount(virtualNode).length;
}

function normalizeNodesToCount(virtualNode, previousChildIsText) {
    var currentChild = virtualNode.___firstChild;
    var nodes = [];
    while (currentChild) {
        var nodeType = currentChild.___nodeType;
        if (nodeType === COMPONENT_NODE) {
            nodes = nodes.concat(normalizeNodesToCount(currentChild));
            var lastChildSoFar = nodes[nodes.length - 1];
            previousChildIsText =
                lastChildSoFar && lastChildSoFar.___nodeType === TEXT_NODE;
        } else if (nodeType === TEXT_NODE) {
            if (!previousChildIsText) {
                nodes.push(currentChild);
                previousChildIsText = true;
            }
        } else {
            nodes.push(currentChild);
            previousChildIsText = false;
        }
        currentChild = currentChild.___nextSibling;
    }
    return nodes;
}

exports.___createFragmentNode = createFragmentNode;
exports.___createMatchingFragment = createMatchingFragment;
