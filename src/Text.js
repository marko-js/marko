var Node = require('./Node');
var inherit = require('raptor-util/inherit');

function Text(value) {
    Node.call(this, 0 /* childCount */);
    this.nodeValue = value;
}

Text.prototype = {
    nodeType: 3,

    actualize: function(document) {
        return document.createTextNode(this.nodeValue);
    },

    cloneNode: function() {
        return new Text(this.nodeValue);
    }
};

inherit(Text, Node);

module.exports = Text;