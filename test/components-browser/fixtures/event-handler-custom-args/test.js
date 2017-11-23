var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    component.getComponent('ok').emitPressEvent();

    expect(component.pressEvent[0].type).to.equal('ok');
    expect(component.pressEvent[1].component).to.equal(component.getComponent('ok'));

    component.getComponent('cancel').emitPressEvent();

    expect(component.pressEvent[0].type).to.equal('cancel');
    expect(component.pressEvent[1].component).to.equal(component.getComponent('cancel'));
};