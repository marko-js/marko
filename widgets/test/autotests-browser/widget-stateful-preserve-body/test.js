var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    var button1Widget = widget.getWidget('button1');

    expect(button1Widget.el.innerHTML).to.equal('Initial Button Label');
    expect(button1Widget.el.className).to.contain('large');

    require('marko-widgets').batchUpdate(function() {
        button1Widget.setSize('small');
    });

    expect(button1Widget.el.innerHTML).to.equal('Initial Button Label');
    expect(button1Widget.el.className).to.contain('small');

    require('marko-widgets').batchUpdate(function() {
        widget.setState('buttonLabel', 'New Button Label');
    });

    expect(button1Widget.el.innerHTML).to.equal('New Button Label');
    expect(button1Widget.el.className).to.contain('large'); // Size will revert back to large since it was not driven by state
};