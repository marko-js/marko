var Node = require('./Node');
var inherit = require('raptor-util/inherit');

function Comment(value) {
    Node.call(this, -1 /* no children */);
    this.nodeValue = value;
}

Comment.prototype = {
    nodeType: 8,

    actualize: function(document) {
        return document.createComment(this.nodeValue);
    },

    cloneNode: function() {
        return new Comment(this.nodeValue);
    }
};

inherit(Comment, Node);

module.exports = Comment;