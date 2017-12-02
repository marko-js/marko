var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var oldEl = widget.el;

    var button1Widget = widget.getWidget('button1');
    var button2Widget = widget.getWidget('button2');

    expect(button1Widget.el.className).to.contain('small');
    expect(button2Widget.el.className).to.contain('small');

    expect(button1Widget.el.innerHTML).to.contain('Initial Label');
    expect(button2Widget.el.innerHTML).to.contain('Initial Label');

    widget.setState('buttonSize', 'large');
    widget.setState('buttonLabel', 'New Label'); // buttonLabel does not have an update handler
    widget.update();

    expect(button1Widget.el.className).to.contain('large');
    expect(button2Widget.el.className).to.contain('large');

    expect(button1Widget.el.innerHTML).to.contain('New Label');
    expect(button2Widget.el.innerHTML).to.contain('New Label');

    expect(widget.el).to.equal(oldEl);
};