var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'));

    expect(widget.el.querySelector('pre').innerHTML).to.equal('');

    widget.submit();
    widget.update();

    expect(widget.el.querySelector('pre').innerHTML).to.equal('Placeholder error');
};