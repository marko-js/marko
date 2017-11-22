var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var fooEl = component.getEl('foo');
    var barEl = component.getEl('bar');

    expect(fooEl.nextSibling).to.equal(barEl);

    component.state.swapped = true;
    component.update();

    expect(component.getEl('foo')).to.equal(fooEl);
    expect(component.getEl('bar')).to.equal(barEl);

    expect(barEl.nextSibling).to.equal(fooEl);
};