var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    helpers.triggerClick(component.getEl('button'));
    expect(component.divClicked).to.equal(false);
    expect(component.buttonClicked).to.equal(true);
};