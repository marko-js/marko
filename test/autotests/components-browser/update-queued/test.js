var expect = require('chai').expect;

module.exports = function(helpers, done) {

    var widget = helpers.mount(require('./index'), { name: 'Frank' });

    expect(widget.el.innerHTML).to.contain('Hello Frank!');

    widget.setName('Jane');

    expect(widget.el.innerHTML).to.contain('Hello Frank!');

    widget.onUpdate = function() {
        expect(widget.el.innerHTML).to.contain('Hello Jane!');
        done();
    };
};