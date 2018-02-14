var expect = require('chai').expect;

module.exports = function (helpers) {
    var previousSibling = document.createElement('div');
    helpers.targetEl.appendChild(previousSibling);

    var widget = helpers.mount(require('./index'), {
        label: 'Foo'
    });

    var nextSibling = document.createElement('div');
    helpers.targetEl.appendChild(nextSibling);

    expect(widget.el.previousSibling).to.equal(previousSibling);
    expect(widget.el.nextSibling).to.equal(nextSibling);

    var parentNode = widget.el.parentNode;

    expect(widget.el.innerHTML.trim()).to.equal('Foo');

    // var oldEl = widget.el;

    widget.rerender({
        label: 'Bar'
    });

    expect(widget.el.innerHTML.trim()).to.equal('Bar');

    expect(widget.el.parentNode).to.equal(parentNode);
    // expect(widget.el !== oldEl).to.equal(true);


    expect(helpers.targetEl.childNodes.length).to.equal(3);
    expect(helpers.targetEl.childNodes[0]).to.equal(previousSibling);
    expect(helpers.targetEl.childNodes[1]).to.equal(widget.el);
    expect(helpers.targetEl.childNodes[2]).to.equal(nextSibling);
};