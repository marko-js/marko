var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VText(value, ownerComponent) {
  this.___VNode(-1 /* no children */, ownerComponent);
  this.___nodeValue = value;
}

VText.prototype = {
  ___Text: true,

  ___nodeType: 3,

  ___actualize: function(doc) {
    return doc.createTextNode(this.___nodeValue);
  },

  ___cloneNode: function() {
    return new VText(this.___nodeValue);
  }
};

inherit(VText, VNode);

module.exports = VText;
