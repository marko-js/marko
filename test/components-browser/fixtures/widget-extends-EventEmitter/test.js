var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var fooEvent = null;
    var fooEventThis = null;

    function fooListener() {
        fooEvent = arguments;
        fooEventThis = this;
    }

    component.on('foo', fooListener);

    component.emit('foo', 'a', 'b');

    expect(fooEvent[0]).to.equal('a');

    expect(fooEvent[1]).to.equal('b');
    expect(fooEventThis).to.equal(component);

    fooEvent = null;

    component.removeListener('foo', fooListener);

    component.emit('foo', 'a', 'b');

    expect(fooEvent).to.equal(null);
};