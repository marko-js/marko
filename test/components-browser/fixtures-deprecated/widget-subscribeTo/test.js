var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget1 = helpers.mount(require('./index'), {});
    var widget2 = helpers.mount(require('./index'), {});

    var fooEvent = null;
    var fooEventThis = null;

    widget1.subscribeTo(widget2).on('foo', function fooListener() {
        fooEvent = arguments;
        fooEventThis = this;
    });

    widget2.emit('foo', 'a', 'b');

    expect(fooEvent[0]).to.equal('a');
    expect(fooEvent[1]).to.equal('b');
    expect(fooEventThis).to.equal(widget2);

    fooEvent = null;

    widget2.destroy();

    widget2.emit('foo', 'a', 'b');

    expect(fooEvent).to.equal(null);
};