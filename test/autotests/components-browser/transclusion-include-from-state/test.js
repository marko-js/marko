var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    var buttonComponent = component.getComponent('button');
    expect(buttonComponent.el.innerHTML).to.contain('Frank');
    expect(buttonComponent.el.className).to.equal('app-button app-button-small');

    component.rerender({ name: 'John '});

    expect(buttonComponent.el.innerHTML).to.contain('John');

    buttonComponent.setSize('large');
    buttonComponent.update();
    expect(buttonComponent.el.innerHTML).to.contain('John');
    expect(buttonComponent.el.className).to.equal('app-button app-button-large');

    buttonComponent.rerender({
        size: 'small',
        variant: 'secondary'
        // NOTE: We aren't including renderBody() but we expect that content to be preserved
    });

    expect(buttonComponent.el.innerHTML).to.contain('John');
    expect(buttonComponent.el.className).to.equal('app-button app-button-secondary app-button-small');
};