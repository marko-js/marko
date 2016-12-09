var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    require('marko/widgets').batchUpdate(function() {
        var oldState = widget.__rawState;
        widget.setState('foo', 'bar');

        expect(widget.__rawState).to.not.equal(oldState);

        oldState = widget.__rawState;
        widget.setState('hello', 'world');
        expect(widget.__rawState).to.equal(oldState);
    });
};