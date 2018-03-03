var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'));
    var buttonComponent = component.getComponent('button');
    var countComponent = component.getComponent('count');

    expect(buttonComponent).to.exist;
    expect(countComponent).to.exist;

    // TODO: enable this part of the test
    /*
    expect(buttonComponent.el.innerHTML).to.contain('0');
    expect(buttonComponent.el.className).to.equal('app-button app-button-small');

    buttonComponent.setSize('large');
    buttonComponent.update();
    expect(buttonComponent.el.innerHTML).to.contxain('0');
    expect(buttonComponent.el.className).to.equal('app-button app-button-large');

    debugger;
    countComponent.increment();
    countComponent.update();
    expect(buttonComponent.el.innerHTML).to.contain('1');

    buttonComponent.setSize('small');
    buttonComponent.update();
    expect(buttonComponent.el.innerHTML).to.contain('1');
    expect(buttonComponent.el.className).to.equal('app-button app-button-small');
    */
};