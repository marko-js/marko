var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var oldState = widget.state.toJSON();
    widget.setState('foo', 'bar');

    expect(widget.state.toJSON()).to.not.equal(oldState);

    oldState = widget.state.toJSON();
    widget.setState('hello', 'world');
    expect(widget.state.toJSON()).to.equal(oldState);
};