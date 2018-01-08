var expect = require('chai').expect;

module.exports = function (helpers) {
    var component1 = helpers.mount(require('./index'), {});
    var component2 = helpers.mount(require('./index'), {});

    var fooEvent = null;
    var fooEventThis = null;

    component1.subscribeTo(component2).on('foo', function fooListener() {
        fooEvent = arguments;
        fooEventThis = this;
    });

    component2.emit('foo', 'a', 'b');

    expect(fooEvent[0]).to.equal('a');
    expect(fooEvent[1]).to.equal('b');
    expect(fooEventThis).to.equal(component2);

    fooEvent = null;

    component1.destroy();

    component2.emit('foo', 'a', 'b');

    expect(fooEvent).to.equal(null);
};