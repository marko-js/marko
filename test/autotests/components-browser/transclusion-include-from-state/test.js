var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    var buttonComponent = component.getComponent('button');
    expect(buttonComponent.el.innerHTML).to.contain('Frank');
    expect(buttonComponent.el.className).to.equal('app-button app-button-small');

    component.input = { name: 'John '};
    component.update();

    expect(buttonComponent.el.innerHTML).to.contain('John');

    buttonComponent.setSize('large');
    buttonComponent.update();
    expect(buttonComponent.el.innerHTML).to.contain('John');
    expect(buttonComponent.el.className).to.equal('app-button app-button-large');

    buttonComponent.input = {
        size: 'small',
        variant: 'secondary'
        // NOTE: We aren't including renderBody() but we expect that content to be preserved
    };
    buttonComponent.update();

    expect(buttonComponent.el.innerHTML).to.contain('John');
    expect(buttonComponent.el.className).to.equal('app-button app-button-secondary app-button-small');
};