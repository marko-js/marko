var Node = require('./Node');
var inherit = require('raptor-util/inherit');

function DocumentFragment(documentFragment) {
    var namespaceURI;

    if (documentFragment) {
        Node.call(this, documentFragment);
        namespaceURI = documentFragment.namespaceURI;
    } else {
        Node.call(this, null /* childCount */);
    }

    this.namespaceURI = namespaceURI;
}

DocumentFragment.prototype = {
    nodeType: 11,

    _nsAware: true,

    cloneNode: function() {
        return new DocumentFragment(this);
    }
};

inherit(DocumentFragment, Node);

module.exports = DocumentFragment;