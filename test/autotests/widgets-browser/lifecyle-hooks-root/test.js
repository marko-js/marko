var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { name: 'Frank' });
    expect(widget.el.querySelector('.name').innerHTML).to.equal('Frank');
    expect(widget.hookNames).to.deep.equal(['create', 'render', 'mount']);
    widget.reset();

    widget.input = { name: 'John' };
    widget.update();

    expect(widget.el.querySelector('.name').innerHTML).to.equal('John');
    expect(widget.hookNames).to.deep.equal(['render', 'update']);
};
