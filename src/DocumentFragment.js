var Node = require('./Node');
var inherit = require('raptor-util/inherit');
var extend = require('raptor-util/extend');

function DocumentFragmentClone(other) {
    extend(this, other);
    this.parentNode = undefined;
    this._nextSibling = undefined;
}

function DocumentFragment(documentFragment) {
    Node.call(this, null /* childCount */);
    this.namespaceURI = undefined;
}

DocumentFragment.prototype = {
    nodeType: 11,

    _nsAware: true,

    cloneNode: function() {
        return new DocumentFragmentClone(this);
    }
};

inherit(DocumentFragment, Node);

DocumentFragmentClone.prototype = DocumentFragment.prototype;

module.exports = DocumentFragment;