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

module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    init: function() {
        window.testData.addWidget('app-preserve-dom', this);
    },
    testPreserveDOM: function() {
        var oldEl = this.el;
        var oldPreserveEl1 = this.getEl('preserve');
        var oldPreserveEl2 = this.el.querySelector('.preserve');

        var oldPreserveBodyEl1 = this.getEl('preserveBody');
        var oldPreserveBodyEl2 = this.el.querySelector('.preserve-body');
        var oldPreserveBodyEl1Children = nodeListToArray(oldPreserveBodyEl1.childNodes);
        var oldPreserveBodyEl2Children = nodeListToArray(oldPreserveBodyEl2.childNodes);

        var oldHelloEl1 = this.getWidget('hello').el;
        var oldHelloEl2 = this.el.querySelector('.app-hello');

        expect(oldEl != null).to.equal(true);

        this.rerender();

        var newEl = this.el;
        var newPreserveEl1 = this.getEl('preserve');
        var newPreserveEl2 = this.el.querySelector('.preserve');

        var newPreserveBodyEl1 = this.getEl('preserveBody');
        var newPreserveBodyEl2 = this.el.querySelector('.preserve-body');

        var newHelloEl1 = this.getWidget('hello').el;
        var newHelloEl2 = this.el.querySelector('.app-hello');

        expect(newEl != null).to.equal(true);
        expect(oldEl != newEl).to.equal(true);

        expect(newPreserveEl1).to.equal(oldPreserveEl1);
        expect(newPreserveEl2).to.equal(oldPreserveEl2);

        expect(newPreserveBodyEl1).to.not.equal(oldPreserveBodyEl1);
        expect(newPreserveBodyEl2).to.not.equal(oldPreserveBodyEl2);

        checkChildrenMatch(oldPreserveBodyEl1Children, newPreserveBodyEl1.childNodes);
        checkChildrenMatch(oldPreserveBodyEl2Children, newPreserveBodyEl2.childNodes);

        expect(oldHelloEl1).to.equal(newHelloEl1);
        expect(oldHelloEl2).to.equal(newHelloEl2);
    }
});