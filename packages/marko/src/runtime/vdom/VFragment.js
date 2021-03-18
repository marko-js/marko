var domData = require("../components/dom-data");
var keysByDOMNode = domData.___keyByDOMNode;
var vElementByDOMNode = domData.___vElementByDOMNode;
var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");
var createFragmentNode = require("./morphdom/fragment").___createFragmentNode;

function VFragment(key, ownerComponent, preserve) {
  this.___VNode(null /* childCount */, ownerComponent);
  this.___key = key;
  this.___preserve = preserve;
}

VFragment.prototype = {
  ___nodeType: 12,
  ___actualize: function () {
    var fragment = createFragmentNode();
    keysByDOMNode.set(fragment, this.___key);
    vElementByDOMNode.set(fragment, this);
    return fragment;
  }
};

inherit(VFragment, VNode);

module.exports = VFragment;
