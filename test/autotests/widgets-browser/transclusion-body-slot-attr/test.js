var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    var buttonWidget = widget.getWidget('button');
    expect(buttonWidget.el.innerHTML).to.contain('Frank');
    expect(buttonWidget.el.className).to.equal('app-button app-button-small');

    // Button widget will not rerender since it's state did not change and that means that the
    // button content will remain as 'John' instead of 'Frank'
    widget.setProps({ name: 'John '});
    widget.update();

    expect(buttonWidget.el.innerHTML).to.contain('John');

    buttonWidget.setSize('large');
    buttonWidget.update();
    expect(buttonWidget.el.innerHTML).to.contain('John');
    expect(buttonWidget.el.className).to.equal('app-button app-button-large');
};