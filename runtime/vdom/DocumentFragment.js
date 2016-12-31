var Node = require('./Node');
var inherit = require('raptor-util/inherit');
var extend = require('raptor-util/extend');

function DocumentFragmentClone(other) {
    extend(this, other);
    this.$__parentNode = undefined;
    this.$__nextSibling = undefined;
}

function DocumentFragment(documentFragment) {
    this.$__Node(null /* childCount */);
    this.namespaceURI = undefined;
}

DocumentFragment.prototype = {
    nodeType: 11,

    $__DocumentFragment: true,

    $__nsAware: true,

    $__cloneNode: function() {
        return new DocumentFragmentClone(this);
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

inherit(DocumentFragment, Node);

DocumentFragmentClone.prototype = DocumentFragment.prototype;

module.exports = DocumentFragment;