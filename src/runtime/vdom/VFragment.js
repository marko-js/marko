var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");
var createFragmentNode = require("../../morphdom/fragment")
    .___createFragmentNode;

function VFragment(key, component, preserve) {
    this.___VNode(null /* childCount */);
    this.___key = key;
    this.___component = component;
    this.___preserve = preserve;
}

VFragment.prototype = {
    ___nodeType: 12,
    ___actualize: function() {
        var fragment = createFragmentNode();
        fragment.___markoKey = this.___key;
        fragment.___markoVElement = this;
        return fragment;
    }
};

inherit(VFragment, VNode);

module.exports = VFragment;
