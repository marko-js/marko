var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    helpers.triggerClick(widget.getEl('button'));
    expect(widget.divClicked).to.equal(false);
    expect(widget.buttonClicked).to.equal(true);
};