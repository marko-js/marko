var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    expect(widget.getEl('foo').className).to.equal('foo');
    expect(widget.getEl('bar').className).to.equal('bar');
    expect(widget.getEl('foo-bar').className).to.equal('foo-bar');
};