var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    var liEls = component.el.querySelectorAll('li');

    helpers.triggerMouseEvent(liEls[0], 'mouseover');
    expect(component.mouseOverColor).to.equal('red');

    helpers.triggerMouseEvent(liEls[1], 'mouseover');
    expect(component.mouseOverColor).to.equal('green');

    helpers.triggerMouseEvent(liEls[2], 'mouseover');
    expect(component.mouseOverColor).to.equal('blue');

    helpers.triggerMouseEvent(liEls[0], 'mouseout');
    expect(component.mouseOutColor).to.equal('red');

    helpers.triggerMouseEvent(liEls[1], 'mouseout');
    expect(component.mouseOutColor).to.equal('green');

    helpers.triggerMouseEvent(liEls[2], 'mouseout');
    expect(component.mouseOutColor).to.equal('blue');
};