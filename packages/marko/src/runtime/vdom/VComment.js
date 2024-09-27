var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VComment(value, ownerComponent) {
  this.___VNode(-1 /* no children */, ownerComponent);
  this.___nodeValue = value;
}

VComment.prototype = {
  ___nodeType: 8,

  ___actualize: function (host) {
    var nodeValue = this.___nodeValue;
    return (host.ownerDocument || host).createComment(nodeValue);
  },

  ___cloneNode: function () {
    return new VComment(this.___nodeValue);
  },
};

inherit(VComment, VNode);

module.exports = VComment;
