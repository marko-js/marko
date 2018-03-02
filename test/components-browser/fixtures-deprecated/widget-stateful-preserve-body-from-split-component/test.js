var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require.resolve('./index'), {});

    var button1Widget = widget.getWidget('button1');

    expect(button1Widget.el.innerHTML).to.include('Initial Button Label');
    expect(button1Widget.el.className).to.contain('large');

    button1Widget.setSize('small');
    button1Widget.update();

    expect(button1Widget.el.innerHTML).to.include('Initial Button Label');
    expect(button1Widget.el.className).to.contain('small');
};