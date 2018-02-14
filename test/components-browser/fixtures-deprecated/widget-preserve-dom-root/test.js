var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        messageCount: 30
    });

    expect(widget.el.innerHTML).to.contain('Frank');
    expect(widget.el.innerHTML).to.contain('30');

    widget.setName('John');
    widget.update();

    expect(widget.el.innerHTML).to.not.contain('John');
    expect(widget.el.innerHTML).to.contain('Frank');
    expect(widget.el.innerHTML).to.contain('30');
};