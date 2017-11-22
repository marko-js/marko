var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    var liEls = component.el.querySelectorAll('li');

    helpers.triggerMouseEvent(liEls[0], 'click');
    expect(component.color).to.equal('red');

    helpers.triggerMouseEvent(liEls[1], 'click');
    expect(component.color).to.equal('green');

    helpers.triggerMouseEvent(liEls[2], 'click');
    expect(component.color).to.equal('blue');
};