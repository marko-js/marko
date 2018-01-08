var expect = require('chai').expect;
module.exports = function (node, context) {
    var previousSibling = node.previousSibling;
    var nextSibling = node.nextSibling;

    expect(previousSibling).to.be.an('object');
    expect(nextSibling).to.be.an('object');

    expect(previousSibling.tagName).to.equal('a');
    expect(nextSibling.tagName).to.equal('b');

    previousSibling.appendChild(context.builder.text(context.builder.literal('A')));
    nextSibling.appendChild(context.builder.text(context.builder.literal('B')));
};