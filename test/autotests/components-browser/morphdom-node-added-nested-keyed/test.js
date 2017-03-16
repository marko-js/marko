var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });
    var nameInput = component.getEl('nameInput');

    component.state.renderCount++;

    component.update();

    expect(component.getEl('nameInput')).to.equal(nameInput);
    expect(component.getEl('nameInput').value).to.equal('2');
    expect(component.getEl('nameInput').parentNode.nodeName).to.equal('P');
};
