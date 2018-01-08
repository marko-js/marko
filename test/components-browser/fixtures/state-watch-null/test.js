var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.el.innerHTML).to.contain('Hello !');
    component.state.name = 'Frank';
    component.update();
    expect(component.el.innerHTML).to.contain('Hello Frank!');
};