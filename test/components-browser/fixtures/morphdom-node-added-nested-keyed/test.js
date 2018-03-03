var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});

    expect(component.getEl('nameInput').parentNode.nodeName).to.equal('DIV');

    component.state.renderCount++;
    component.update();

    expect(component.getEl('nameInput').parentNode.nodeName).to.equal('P');
    expect(component.getEl('nameInput').value).to.equal('2');
};