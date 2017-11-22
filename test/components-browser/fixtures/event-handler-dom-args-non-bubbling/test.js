var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.mouseMoveEvent).to.equal(undefined);

    helpers.triggerMouseMove(component.getEl('ok'));

    expect(component.mouseMoveEvent[0]).to.equal('ok');
    expect(component.mouseMoveEvent[1].stopPropagation).to.be.a('function');
    expect(component.mouseMoveEvent[2].innerHTML).to.equal('OK');

    helpers.triggerMouseMove(component.getEl('cancel'));

    expect(component.mouseMoveEvent[0]).to.equal('cancel');
    expect(component.mouseMoveEvent[1].stopPropagation).to.be.a('function');
    expect(component.mouseMoveEvent[2].innerHTML).to.equal('Cancel');
};