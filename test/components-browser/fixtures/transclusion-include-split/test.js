var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {
        name: 'Frank'
    });

    var buttonComponent = component.getComponent('button');
    expect(buttonComponent.el.innerHTML).to.contain('Frank');
    expect(buttonComponent.el.className).to.equal('app-button app-button-small');

    buttonComponent.setSize('large');
    buttonComponent.update();
    expect(buttonComponent.el.innerHTML).to.contain('Frank');
    expect(buttonComponent.el.className).to.equal('app-button app-button-large');
};