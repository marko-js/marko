var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('widget re-render' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should create widgets that supports rerender', function() {
        var previousSibling = document.createElement('div');
        document.getElementById('target').appendChild(previousSibling);

        var widget = require('./fixtures/components/app-rerender')
            .render({
                label: 'Foo'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        var nextSibling = document.createElement('div');
        document.getElementById('target').appendChild(nextSibling);

        expect(widget.el.previousSibling).to.equal(previousSibling);
        expect(widget.el.nextSibling).to.equal(nextSibling);

        var parentNode = widget.el.parentNode;

        expect(widget.el.innerHTML.trim()).to.equal('Foo');

        var oldEl = widget.el;

        widget.rerender({
            label: 'Bar'
        });

        expect(widget.el.innerHTML.trim()).to.equal('Bar');

        expect(widget.el.parentNode).to.equal(parentNode);
        expect(widget.el !== oldEl).to.equal(true);


        expect(document.getElementById('target').childNodes.length).to.equal(3);
        expect(document.getElementById('target').childNodes[0]).to.equal(previousSibling);
        expect(document.getElementById('target').childNodes[1]).to.equal(widget.el);
        expect(document.getElementById('target').childNodes[2]).to.equal(nextSibling);
    });

    it('should use the same ID for re-rendered widgets', function() {
        var widget = require('./fixtures/components/app-rerender')
            .render({
                label: 'Foo'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        var oldId = widget.id;

        widget.rerender({
            label: 'Bar'
        });

        expect(widget.el.id).to.equal(oldId);
    });
});



