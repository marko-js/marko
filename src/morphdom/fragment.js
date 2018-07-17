var helpers = require("./helpers");
var insertBefore = helpers.___insertBefore;

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
    parentNode =
        parentNode || (startNode && startNode.parentNode) || detachedContainer;
    insertBefore(fragment.startNode, startNode, parentNode);
    insertBefore(fragment.endNode, nextNode, parentNode);
    return fragment;
}

function beginFragmentNode(startNode, parentNode) {
    var fragment = createFragmentNode(startNode, null, parentNode);
    fragment.___finishFragment = function(nextNode) {
        insertBefore(
            fragment.endNode,
            nextNode,
            parentNode || startNode.parentNode
        );
    };
    return fragment;
}

exports.___createFragmentNode = createFragmentNode;
exports.___beginFragmentNode = beginFragmentNode;
