var expect = require('chai').expect;

module.exports = function(helpers) {

    var widget = helpers.mount(require('./index.marko'), { name: 'Frank' });

    expect(widget.el.innerHTML).to.contain('Hello Frank!');

    widget.setName('Jane');
    widget.update();

    expect(widget.el.innerHTML).to.contain('Hello Jane!');
};