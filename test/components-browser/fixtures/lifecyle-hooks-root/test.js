var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank' });
    expect(component.el.querySelector('.name').innerHTML).to.equal('Frank');
    expect(component.hookNames).to.deep.equal(['create', 'render', 'mount']);
    component.reset();

    component.input = { name: 'John' };
    component.update();

    expect(component.el.querySelector('.name').innerHTML).to.equal('John');
    expect(component.hookNames).to.deep.equal(['render', 'update']);
};