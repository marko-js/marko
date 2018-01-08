var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var button1Component = component.getComponent('button1');

    expect(button1Component.el.innerHTML).to.contain('Initial Button Label');
    expect(button1Component.el.className).to.contain('large');

    button1Component.setSize('small');
    button1Component.update();

    expect(button1Component.el.innerHTML).to.contain('Initial Button Label');
    expect(button1Component.el.className).to.contain('small');

    component.setState('buttonLabel', 'New Button Label');
    component.update();

    expect(button1Component.el.innerHTML).to.contain('New Button Label');
    expect(button1Component.el.className).to.contain('large'); // Size will revert back to large since it was not driven by state
};