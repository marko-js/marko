var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        messageCount: 30
    });

    expect(widget.el.innerHTML).to.contain('Frank');
    expect(widget.el.innerHTML).to.contain('30');

    require('marko/widgets').batchUpdate(function() { // Force the HTML update to be immediate
        widget.setName('John');
    });

    expect(widget.el.innerHTML).to.not.contain('John');
    expect(widget.el.innerHTML).to.contain('Frank');
    expect(widget.el.innerHTML).to.contain('30');
};