var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");
var extend = require("raptor-util/extend");

function VDocumentFragmentClone(other) {
  extend(this, other);
  this.___parentNode = null;
  this.___nextSiblingInternal = null;
}

function VDocumentFragment(out) {
  this.___VNode(null /* childCount */);
  this.___out = out;
}

VDocumentFragment.prototype = {
  ___nodeType: 11,

  ___DocumentFragment: true,

  ___cloneNode: function () {
    return new VDocumentFragmentClone(this);
  },

  ___actualize: function (host) {
    return (host.ownerDocument || host).createDocumentFragment();
  }
};

inherit(VDocumentFragment, VNode);

VDocumentFragmentClone.prototype = VDocumentFragment.prototype;

module.exports = VDocumentFragment;
