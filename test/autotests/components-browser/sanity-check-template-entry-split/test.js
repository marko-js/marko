var expect = require('chai').expect;

module.exports = function(helpers) {

    var widget = helpers.mount(require('./index.marko'), { name: 'Frank' });

    expect(widget.el.innerHTML).to.contain('FRANK');

    widget.setName('Jane');

    expect(widget.el.innerHTML).to.contain('Jane');
};