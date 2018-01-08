var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank'
    });
    var targetEl = widget.el.parentNode;
    expect(targetEl.innerHTML).to.contain('Frank');
    widget.setName('John');
    expect(targetEl.innerHTML).to.contain('John');
    expect(targetEl.innerHTML).to.not.contain('Frank');

    widget.rerender({
        name: 'Jane'
    });

    expect(targetEl.innerHTML).to.contain('Jane');
};