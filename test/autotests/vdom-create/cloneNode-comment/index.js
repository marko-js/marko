var expect = require('chai').expect;

module.exports = function(helpers) {
    var comment = helpers.vdom.createComment('This is a comment');
    var commentClone = comment.___cloneNode();
    expect(commentClone).to.not.equal(comment);
    expect(comment.___nodeValue).to.equal('This is a comment');
    expect(commentClone.___nodeValue).to.equal('This is a comment');
    return comment;
};
