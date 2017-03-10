var VNode = require('./VNode');
var inherit = require('raptor-util/inherit');
var extend = require('raptor-util/extend');

function VDocumentFragmentClone(other) {
    extend(this, other);
    this.$__parentNode = null;
    this.$__nextSibling = null;
}

function VDocumentFragment(documentFragment) {
    this.$__VNode(null /* childCount */);
    this.namespaceURI = null;
}

VDocumentFragment.prototype = {
    nodeType: 11,

    $__DocumentFragment: true,

    $__cloneNode: function() {
        return new VDocumentFragmentClone(this);
    },

    actualize: function(doc) {
        var docFragment = doc.createDocumentFragment();

        var curChild = this.firstChild;

        while(curChild) {
            docFragment.appendChild(curChild.actualize(doc));
            curChild = curChild.nextSibling;
        }

        return docFragment;
    }
};

inherit(VDocumentFragment, VNode);

VDocumentFragmentClone.prototype = VDocumentFragment.prototype;

module.exports = VDocumentFragment;
