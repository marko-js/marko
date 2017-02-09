var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.clicked).to.equal(false);
    helpers.triggerMouseEvent(widget.getEl('button'), 'click');
    expect(widget.clicked).to.equal(true);
};