var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'));

    expect(widget.getEl('searchInput').value).to.equal('');

    widget.increment();
    widget.update();

    expect(widget.getEl('searchInput').value).to.equal('');
};