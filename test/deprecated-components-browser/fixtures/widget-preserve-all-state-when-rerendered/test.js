var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        count: 30
    });

    var targetEl = widget.el;

    expect(targetEl.innerHTML).to.contain('Hello Frank! You have 30 new messages.');
    expect(targetEl.innerHTML).to.contain('foo: bar');
    expect(targetEl.innerHTML).to.contain('hello: world');
    expect(widget.state.name).to.equal('Frank');
    expect(widget.state.count).to.equal(30);

    widget.setState('name', 'John');
    widget.update();

    expect(targetEl.innerHTML).to.contain('Hello John! You have 30 new messages.');
    expect(targetEl.innerHTML).to.contain('foo: bar');
    expect(targetEl.innerHTML).to.contain('hello: world');
    expect(widget.state.name).to.equal('John');
    expect(widget.state.count).to.equal(30);
};