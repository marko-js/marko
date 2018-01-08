var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        size: 'large',
        label: 'Initial Label'
    });

    expect(widget.el.className).to.contain('large');

    widget.destroy();

    expect(widget.update()).to.be.undefined;
};