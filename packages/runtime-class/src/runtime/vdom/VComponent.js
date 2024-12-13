var inherit = require("raptor-util/inherit");
var VNode = require("./VNode");

function VComponent(component, key, ownerComponent, preserve) {
  this.___VNode(null /* childCount */, ownerComponent);
  this.___key = key;
  this.___component = component;
  this.___preserve = preserve;
}

VComponent.prototype = {
  ___nodeType: 2,
};

inherit(VComponent, VNode);

module.exports = VComponent;
