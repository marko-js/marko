var VNode = require('./VNode');
var inherit = require('raptor-util/inherit');

function VComment(value) {
    this.$__VNode(-1 /* no children */);
    this.nodeValue = value;
}

VComment.prototype = {
    nodeType: 8,

    actualize: function(doc) {
        return doc.createComment(this.nodeValue);
    },

    $__cloneNode: function() {
        return new VComment(this.nodeValue);
    }
};

inherit(VComment, VNode);

module.exports = VComment;
