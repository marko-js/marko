var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(helpers.targetEl.querySelectorAll('.color').length).to.equal(3);

    var redComponent = component.getComponent('red');
    var greenComponent = component.getComponent('green');
    var blueComponent = component.getComponent('blue');

    var redEl = redComponent.getEl('root');
    var greenEl = greenComponent.getEl('root');
    var blueEl = blueComponent.getEl('root');

    var ul = component.getEl('root');
    expect(ul != null).to.equal(true);

    expect(redEl.parentNode).to.equal(ul);
    expect(greenEl.parentNode).to.equal(ul);
    expect(blueEl.parentNode).to.equal(ul);

    component.input = { colors: ['red', 'blue'] };
    component.update();

    expect(redEl.parentNode).to.equal(ul);
    expect(greenEl.parentNode).to.equal(ul);
    expect(blueEl.parentNode).to.equal(ul);

    expect(helpers.targetEl.querySelectorAll('.color').length).to.equal(3);

    expect(redComponent.detachEvent == null).to.equal(true);
    expect(greenComponent.detachEvent != null).to.equal(true);
    expect(blueComponent.detachEvent == null).to.equal(true);

    greenComponent.detachEvent.detach();

    expect(helpers.targetEl.querySelectorAll('.color').length).to.equal(2);
};