var expect = require('chai').expect;

module.exports = function (helpers) {
    var counter = 0;

    var widget = helpers.mount(require('./index'), {
        counter: counter
    });

    expect(widget.el.querySelector('.unpreserved-counter').innerHTML).to.equal('0');
    expect(widget.el.querySelector('.preserve').getAttribute('data-counter')).to.equal('0');
    expect(widget.el.querySelector('.preserved-counter').innerHTML).to.equal('0');

    widget.rerender({
        counter: ++counter
    });

    expect(widget.el.querySelector('.unpreserved-counter').innerHTML).to.equal('1');
    expect(widget.el.querySelector('.preserve').getAttribute('data-counter')).to.equal('1');
    expect(widget.el.querySelector('.preserved-counter').innerHTML).to.equal('0');
};