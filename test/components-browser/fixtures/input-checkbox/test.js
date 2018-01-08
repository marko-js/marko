var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'));

    var firstCheckbox = component.getEl('first');
    var secondCheckbox = component.getEl('second');

    expect(firstCheckbox.checked).to.equal(true);
    expect(secondCheckbox.checked).to.equal(false);

    helpers.triggerMouseEvent(firstCheckbox, 'click');

    expect(firstCheckbox.checked).to.equal(false);
    expect(secondCheckbox.checked).to.equal(false);

    helpers.triggerMouseEvent(firstCheckbox, 'click');

    expect(firstCheckbox.checked).to.equal(true);
    expect(secondCheckbox.checked).to.equal(false);

    helpers.triggerMouseEvent(secondCheckbox, 'click');

    expect(firstCheckbox.checked).to.equal(true);
    expect(secondCheckbox.checked).to.equal(true);
};