$_mod.def("/marko$4.7.4/src/runtime/vdom/VDocumentFragment", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.7.4/src/runtime/vdom/VNode'/*'./VNode'*/);
var inherit = require('/raptor-util$3.2.0/inherit'/*'raptor-util/inherit'*/);
var extend = require('/raptor-util$3.2.0/extend'/*'raptor-util/extend'*/);

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

    ___cloneNode: function() {
        return new VDocumentFragmentClone(this);
    },

    ___actualize: function(doc) {
        return doc.createDocumentFragment();
    }
};

inherit(VDocumentFragment, VNode);

VDocumentFragmentClone.prototype = VDocumentFragment.prototype;

module.exports = VDocumentFragment;

});