var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.buttonClickCalls.length).to.equal(0);

    helpers.triggerClick(component.getEl('ok'));

    expect(component.buttonClickCalls.length).to.equal(1);

    expect(component.buttonClickCalls[0][0]).to.equal('ok');
    expect(component.buttonClickCalls[0][1].stopPropagation).to.be.a('function');
    expect(component.buttonClickCalls[0][2].innerHTML).to.equal('OK');

    helpers.triggerClick(component.getEl('cancel'));

    expect(component.buttonClickCalls.length).to.equal(2);

    expect(component.buttonClickCalls[1][0]).to.equal('cancel');
    expect(component.buttonClickCalls[1][1].stopPropagation).to.be.a('function');
    expect(component.buttonClickCalls[1][2].innerHTML).to.equal('Cancel');
};