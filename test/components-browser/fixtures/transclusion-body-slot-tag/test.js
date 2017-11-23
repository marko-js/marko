var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    var buttonComponent = component.getComponent('button');
    expect(buttonComponent.el.innerHTML).to.contain('Frank');
    expect(buttonComponent.el.className).to.equal('app-button app-button-small');

    component.input = { name: 'John ' };
    component.update();

    expect(buttonComponent.el.innerHTML).to.contain('John');

    buttonComponent.setSize('large');
    buttonComponent.update();
    expect(buttonComponent.el.innerHTML).to.contain('John');
    expect(buttonComponent.el.className).to.equal('app-button app-button-large');
};