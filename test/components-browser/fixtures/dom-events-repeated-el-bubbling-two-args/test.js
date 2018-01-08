var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    var liEls = component.el.querySelectorAll('ul.primary li');

    helpers.triggerMouseEvent(liEls[0], 'click');
    expect(component.color).to.deep.equal({ color: 'red', type: 'primary' });

    helpers.triggerMouseEvent(liEls[1], 'click');
    expect(component.color).to.deep.equal({ color: 'green', type: 'primary' });

    helpers.triggerMouseEvent(liEls[2], 'click');
    expect(component.color).to.deep.equal({ color: 'blue', type: 'primary' });

    liEls = component.el.querySelectorAll('ul.secondary li');

    helpers.triggerMouseEvent(liEls[0], 'click');
    expect(component.color).to.deep.equal({ color: 'red', type: 'secondary' });

    helpers.triggerMouseEvent(liEls[1], 'click');
    expect(component.color).to.deep.equal({ color: 'green', type: 'secondary' });

    helpers.triggerMouseEvent(liEls[2], 'click');
    expect(component.color).to.deep.equal({ color: 'blue', type: 'secondary' });
};