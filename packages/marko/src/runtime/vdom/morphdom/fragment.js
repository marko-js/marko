var helpers = require("./helpers");
var insertBefore = helpers.___insertBefore;

var fragmentPrototype = {
  nodeType: 12,
  get firstChild() {
    var firstChild = this.startNode.nextSibling;
    return firstChild === this.endNode ? undefined : firstChild;
  },
  get lastChild() {
    var lastChild = this.endNode.previousSibling;
    return lastChild === this.startNode ? undefined : lastChild;
  },
  get parentNode() {
    var parentNode = this.startNode.parentNode;
    return parentNode === this.detachedContainer ? undefined : parentNode;
  },
  get namespaceURI() {
    return this.startNode.parentNode.namespaceURI;
  },
  get nextSibling() {
    return this.endNode.nextSibling;
  },
  get nodes() {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      if (this.___markersRemovedError) {
        throw this.___markersRemovedError("Cannot get fragment nodes.");
      }
    }
    var nodes = [];
    var current = this.startNode;
    while (current !== this.endNode) {
      nodes.push(current);
      current = current.nextSibling;
    }
    nodes.push(current);
    return nodes;
  },
  insertBefore: function (newChildNode, referenceNode) {
    var actualReference = referenceNode == null ? this.endNode : referenceNode;
    return insertBefore(
      newChildNode,
      actualReference,
      this.startNode.parentNode
    );
  },
  insertInto: function (newParentNode, referenceNode) {
    this.nodes.forEach(function (node) {
      insertBefore(node, referenceNode, newParentNode);
    }, this);
    return this;
  },
  remove: function () {
    this.nodes.forEach(function (node) {
      this.detachedContainer.appendChild(node);
    }, this);
  }
};

function createFragmentNode(startNode, nextNode, parentNode) {
  var fragment = Object.create(fragmentPrototype);
  var isRoot = startNode && startNode.ownerDocument === startNode.parentNode;
  fragment.startNode = isRoot
    ? document.createComment("")
    : document.createTextNode("");
  fragment.endNode = isRoot
    ? document.createComment("")
    : document.createTextNode("");
  fragment.startNode.fragment = fragment;
  fragment.endNode.fragment = fragment;
  var detachedContainer = (fragment.detachedContainer =
    document.createDocumentFragment());
  parentNode =
    parentNode || (startNode && startNode.parentNode) || detachedContainer;
  insertBefore(fragment.startNode, startNode, parentNode);
  insertBefore(fragment.endNode, nextNode, parentNode);
  return fragment;
}

function beginFragmentNode(startNode, parentNode) {
  var fragment = createFragmentNode(startNode, null, parentNode);
  fragment.___finishFragment = function (nextNode) {
    fragment.___finishFragment = null;
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
