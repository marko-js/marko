var Node = require('./Node');
var inherit = require('raptor-util/inherit');

function Comment(value) {
    this.$__Node(-1 /* no children */);
    this.nodeValue = value;
}

Comment.prototype = {
    nodeType: 8,

    actualize: function(doc) {
        return doc.createComment(this.nodeValue);
    },

    $__cloneNode: function() {
        return new Comment(this.nodeValue);
    }
};

inherit(Comment, Node);

module.exports = Comment;