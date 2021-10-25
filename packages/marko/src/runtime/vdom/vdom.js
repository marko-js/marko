var VNode = require("./VNode");
var VDocumentFragment = require("./VDocumentFragment");
var VElement = require("./VElement");
var VText = require("./VText");
var VComponent = require("./VComponent");
var VFragment = require("./VFragment");
var parseHTML = require("./parse-html");

var specialHtmlRegexp = /[&<]/;

function virtualizeChildNodes(node, vdomParent, ownerComponent) {
  var curChild = node.firstChild;
  while (curChild) {
    vdomParent.___appendChild(virtualize(curChild, ownerComponent));
    curChild = curChild.nextSibling;
  }
}

function virtualize(node, ownerComponent) {
  switch (node.nodeType) {
    case 1:
      return VElement.___virtualize(node, virtualizeChildNodes, ownerComponent);
    case 3:
      return new VText(node.nodeValue, ownerComponent);
    case 11:
      var vdomDocFragment = new VDocumentFragment();
      virtualizeChildNodes(node, vdomDocFragment, ownerComponent);
      return vdomDocFragment;
  }
}

function virtualizeHTML(html, ownerComponent) {
  if (!specialHtmlRegexp.test(html)) {
    return new VText(html, ownerComponent);
  }

  var vdomFragment = new VDocumentFragment();
  var curChild = parseHTML(html);

  while (curChild) {
    vdomFragment.___appendChild(virtualize(curChild, ownerComponent));
    curChild = curChild.nextSibling;
  }

  return vdomFragment;
}

var Node_prototype = VNode.prototype;

/**
 * Shorthand method for creating and appending a Text node with a given value
 * @param  {String} value The text value for the new Text node
 */
Node_prototype.t = function (value) {
  var type = typeof value;
  var vdomNode;

  if (type !== "string") {
    if (value == null) {
      value = "";
    } else if (type === "object") {
      if (value.toHTML) {
        vdomNode = virtualizeHTML(value.toHTML());
      }
    }
  }

  this.___appendChild(vdomNode || new VText(value.toString()));
  return this.___finishChild();
};

Node_prototype.___appendDocumentFragment = function () {
  return this.___appendChild(new VDocumentFragment());
};

exports.___VDocumentFragment = VDocumentFragment;
exports.___VElement = VElement;
exports.___VText = VText;
exports.___VComponent = VComponent;
exports.___VFragment = VFragment;
exports.___virtualize = virtualize;
exports.___virtualizeHTML = virtualizeHTML;
