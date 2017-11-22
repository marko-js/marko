var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    var el = widget.el;

    expect(widget.el.parentNode).to.equal(helpers.targetEl);
    widget.destroy();
    expect(widget.el == null).to.equal(true);
    expect(el.parentNode == null).to.equal(true);
};