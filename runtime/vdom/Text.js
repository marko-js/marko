var Node = require('./Node');
var inherit = require('raptor-util/inherit');

function Text(value) {
    this.$__Node(-1 /* no children */);
    this.nodeValue = value;
}

Text.prototype = {
    $__Text: true,

    nodeType: 3,

    actualize: function(doc) {
        return doc.createTextNode(this.nodeValue);
    },

    $__cloneNode: function() {
        return new Text(this.nodeValue);
    }
};

inherit(Text, Node);

module.exports = Text;