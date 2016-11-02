var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});
    expect(widget.el.parentNode).to.equal(helpers.targetEl);
    widget.destroy();
    expect(widget.el.parentNode == null).to.equal(true);
};