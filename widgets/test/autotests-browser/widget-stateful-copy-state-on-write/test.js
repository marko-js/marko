var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    require('marko-widgets').batchUpdate(function() {
        var oldState = widget.state;
        widget.setState('foo', 'bar');

        expect(widget.state).to.not.equal(oldState);

        oldState = widget.state;
        widget.setState('hello', 'world');
        expect(widget.state).to.equal(oldState);
    });
};