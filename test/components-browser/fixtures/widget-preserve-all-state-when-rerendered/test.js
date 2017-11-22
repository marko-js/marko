var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank',
        count: 30
    });

    var targetEl = component.el;

    expect(targetEl.innerHTML).to.contain('Hello Frank! You have 30 new messages.');
    expect(targetEl.innerHTML).to.contain('foo: bar');
    expect(targetEl.innerHTML).to.contain('hello: world');
    expect(component.state.name).to.equal('Frank');
    expect(component.state.count).to.equal(30);

    component.setState('name', 'John');
    component.update();

    expect(targetEl.innerHTML).to.contain('Hello John! You have 30 new messages.');
    expect(targetEl.innerHTML).to.contain('foo: bar');
    expect(targetEl.innerHTML).to.contain('hello: world');
    expect(component.state.name).to.equal('John');
    expect(component.state.count).to.equal(30);
};