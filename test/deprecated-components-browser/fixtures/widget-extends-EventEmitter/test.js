var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    var fooEvent = null;
    var fooEventThis = null;

    function fooListener() {
        fooEvent = arguments;
        fooEventThis = this;
    }

    widget.on('foo', fooListener);

    widget.emit('foo', 'a', 'b');

    expect(fooEvent[0]).to.equal('a');

    expect(fooEvent[1]).to.equal('b');
    expect(fooEventThis).to.equal(widget);

    fooEvent = null;

    widget.removeListener('foo', fooListener);

    widget.emit('foo', 'a', 'b');

    expect(fooEvent).to.equal(null);
};