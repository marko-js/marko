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
    getTemplateData: function(state, input) {
        return {
            preserveCondition: input.preserveCondition
        }
    },
    testPreserveDOM: function() {
        var self = this;

        function getEls() {
            var preserveBodyEl1 = self.getEl('preserveBody');
            var preserveBodyEl2 = self.el.querySelector('.preserve-body');
            var preserveBodyEl1Children = nodeListToArray(preserveBodyEl1.childNodes);
            var preserveBodyEl2Children = nodeListToArray(preserveBodyEl2.childNodes);

            return {
                el: self.el,
                preserveEl1: self.getEl('preserve'),
                preserveEl2: self.el.querySelector('.preserve'),
                preserveBodyEl1: preserveBodyEl1,
                preserveBodyEl2: preserveBodyEl2,
                preserveBodyEl1Children: preserveBodyEl1Children,
                preserveBodyEl2Children: preserveBodyEl2Children,
                helloEl1: self.getWidget('hello').el,
                helloEl2: self.el.querySelector('.app-hello-no-id')
            };
        }

        var origEls = getEls();

        require('marko-widgets').batchUpdate(function() {
            self.rerender({
                preserveCondition: true
            });
        });

        var newEls1 = getEls();
        expect(newEls1.el != null).to.equal(true);
        expect(newEls1.el).to.equal(origEls.el);
        expect(newEls1.preserveEl1).to.equal(origEls.preserveEl1);
        expect(newEls1.preserveEl2).to.equal(origEls.preserveEl2);
        expect(newEls1.preserveEl1).to.equal(origEls.preserveEl1);
        expect(newEls1.preserveEl2).to.equal(origEls.preserveEl2);


        expect(newEls1.preserveBodyEl1).to.equal(origEls.preserveBodyEl1);
        expect(newEls1.preserveBodyEl2).to.equal(origEls.preserveBodyEl2);

        checkChildrenMatch(newEls1.preserveBodyEl1Children, origEls.preserveBodyEl1Children);
        checkChildrenMatch(newEls1.preserveBodyEl2Children, origEls.preserveBodyEl2Children);

        expect(newEls1.helloEl1).to.equal(origEls.helloEl1);
        expect(newEls1.helloEl2).to.equal(origEls.helloEl2);


        // Do not preserve
        require('marko-widgets').batchUpdate(function() {
            self.rerender({
                preserveCondition: false
            });
        });

        var newEls2 = getEls();
        expect(newEls2.el != null).to.equal(true);
        expect(newEls2.el).to.equal(newEls1.el);
        expect(newEls2.preserveEl1).to.equal(newEls1.preserveEl1);
        expect(newEls2.preserveEl2).to.equal(newEls1.preserveEl2);
        expect(newEls2.preserveEl1).to.equal(newEls1.preserveEl1);
        expect(newEls2.preserveEl2).to.equal(newEls1.preserveEl2);


        expect(newEls2.preserveBodyEl1).to.equal(newEls1.preserveBodyEl1);
        expect(newEls2.preserveBodyEl2).to.equal(newEls1.preserveBodyEl2);

        expect(newEls2.preserveBodyEl1Children[0]).to.equal(newEls1.preserveBodyEl1Children[0]);
        expect(newEls2.preserveBodyEl2Children[0]).to.equal(newEls1.preserveBodyEl2Children[0]);

        expect(newEls2.helloEl1).to.equal(newEls1.helloEl1);
        expect(newEls2.helloEl2).to.equal(newEls1.helloEl2);
    }
});