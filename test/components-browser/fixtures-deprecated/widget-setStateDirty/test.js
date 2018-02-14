var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(widget.el.innerHTML).to.contain('red');
    expect(widget.el.innerHTML).to.contain('green');
    expect(widget.el.innerHTML).to.contain('blue');

    // NOTE: name does *not* have an update handler
    widget.addColor('orange');
    widget.update();

    expect(widget.el.innerHTML).to.contain('red');
    expect(widget.el.innerHTML).to.contain('green');
    expect(widget.el.innerHTML).to.contain('blue');
    expect(widget.el.innerHTML).to.contain('orange');
};