var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    expect(widget.getWidgets('bar').length).to.equal(2);
    expect(widget.getWidgets('bar')[0].name).to.equal('a');
    expect(widget.getWidgets('bar')[1].name).to.equal('b');
};