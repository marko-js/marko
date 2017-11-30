var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var children = component.getEl('root').children;
    expect(children.length).to.equal(2);

    expect(children[0].getAttribute('data-foo')).to.equal('true');
    expect(children[0].getAttribute('data-bar')).to.equal(null);

    expect(children[1].getAttribute('data-foo')).to.equal(null);
    expect(children[1].getAttribute('data-bar')).to.equal('true');

    component.state.swapped = true;
    component.update();

    children = component.getEl('root').children;

    expect(children.length).to.equal(2);

    expect(children[0].getAttribute('data-foo')).to.equal(null);
    expect(children[0].getAttribute('data-bar')).to.equal('true');

    expect(children[1].getAttribute('data-foo')).to.equal('true');
    expect(children[1].getAttribute('data-bar')).to.equal(null);
};
