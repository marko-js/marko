var expect = require('chai').expect;
var assert = require('assert');

function nodeListToArray(nodes) {
    var nodeArray = new Array(nodes.length);
    for (var i=0; i<nodes.length; i++) {
        nodeArray[i] = nodes[i];
    }
    return nodeArray;
}

function checkChildrenMatch(children1, children2) {

    expect(children1.length).to.equal(children2.length);

    for (var i=0; i<children1.length; i++) {
        var child1 = children1[i];
        var child2 = children2[i];
        assert.ok(child1 === child2, 'Children at index ' + i + ' do not match. child 1: ' + child1 + ' child 2: ' + child2);
    }
}

module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),
    init: function() {
        window.testData.addWidget('app-preserve-dom', this);
    },
    testPreserveDOM: function() {
        var oldChildren = nodeListToArray(this.el.querySelector('span'));

        this.rerender();

        var newChildren = this.el.querySelector('span');
        checkChildrenMatch(oldChildren, newChildren);
    }
});