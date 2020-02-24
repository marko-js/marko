var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VComponent(component, key, ownerComponent, preserve) {
    this.___VNode(null /* childCount */);
    this.___key = key;
    this.___component = component;
    this.___ownerComponent = ownerComponent;
    this.___preserve = preserve;
}

VComponent.prototype = {
    ___nodeType: 2
};

inherit(VComponent, VNode);

module.exports = VComponent;
