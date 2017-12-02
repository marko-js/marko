$_mod.def("/marko$4.7.4/src/runtime/vdom/VComponent", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.7.4/src/runtime/vdom/VNode'/*'./VNode'*/);
var inherit = require('/raptor-util$3.2.0/inherit'/*'raptor-util/inherit'*/);

function VComponent(component, preserve) {
    this.___VNode(null /* childCount */);
    this.___component = component;
    this.___preserve = preserve;
}

VComponent.prototype = {
    ___nodeType: 2
};

inherit(VComponent, VNode);

module.exports = VComponent;

});