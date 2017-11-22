var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'), {
        value: 1
    });

    expect(component.getEl('input').value).to.equal('1');

    component.state.value = 0;
    component.update();

    expect(component.getEl('input').value).to.equal('0');
};