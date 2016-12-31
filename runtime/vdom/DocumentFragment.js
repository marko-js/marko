var Node = require('./Node');
var inherit = require('raptor-util/inherit');
var extend = require('raptor-util/extend');

function DocumentFragmentClone(other) {
    extend(this, other);
    this.$__parentNode = undefined;
    this.$__nextSibling = undefined;
}

function DocumentFragment(documentFragment) {
    Node.call(this, null /* childCount */);
    this.namespaceURI = undefined;
}

DocumentFragment.prototype = {
    nodeType: 11,

    $__nsAware: true,

    $__cloneNode: function() {
        return new DocumentFragmentClone(this);
    },

    actualize: function(document) {
        var docFragment = document.createDocumentFragment();

        var curChild = this.firstChild;

        while(curChild) {
            docFragment.appendChild(curChild.actualize(document));
            curChild = curChild.nextSibling;
        }

        return docFragment;
    }
};

inherit(DocumentFragment, Node);

DocumentFragmentClone.prototype = DocumentFragment.prototype;

module.exports = DocumentFragment;