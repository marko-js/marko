var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var oldEl = component.el;

    var button1Component = component.getComponent('button1');
    var button2Component = component.getComponent('button2');

    expect(button1Component.el.className).to.contain('small');
    expect(button2Component.el.className).to.contain('small');

    expect(button1Component.el.innerHTML).to.contain('Initial Label');
    expect(button2Component.el.innerHTML).to.contain('Initial Label');

    component.setState('buttonSize', 'large');
    component.update();

    expect(button1Component).to.equal(component.getComponent('button1'));
    expect(button2Component).to.equal(component.getComponent('button2'));

    expect(button1Component.el.className).to.contain('large');
    expect(button2Component.el.className).to.contain('small');

    expect(button1Component.el.innerHTML).to.contain('Initial Label');
    expect(button2Component.el.innerHTML).to.contain('Initial Label');

    expect(component.el).to.equal(oldEl);
};