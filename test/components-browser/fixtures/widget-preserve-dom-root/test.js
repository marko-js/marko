var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank',
        messageCount: 30
    });

    expect(component.el.innerHTML).to.contain('Frank');
    expect(component.el.innerHTML).to.contain('30');

    component.setName('John');
    component.update();

    expect(component.el.innerHTML).to.not.contain('John');
    expect(component.el.innerHTML).to.contain('Frank');
    expect(component.el.innerHTML).to.contain('30');
};