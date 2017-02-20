var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'));

    var span = widget.el.querySelector('span');
    expect(span.className).to.equal('test');

    widget.update();

    expect(span.className).to.equal('test');
};