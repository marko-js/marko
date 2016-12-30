var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    var buttonWidget = widget.getWidget('button');
    expect(buttonWidget.el.innerHTML).to.contain('Frank');
    expect(buttonWidget.el.className).to.equal('app-button app-button-small');

    widget.rerender({ name: 'John '});

    expect(buttonWidget.el.innerHTML).to.contain('John');

    buttonWidget.setSize('large');
    buttonWidget.update();
    expect(buttonWidget.el.innerHTML).to.contain('John');
    expect(buttonWidget.el.className).to.equal('app-button app-button-large');

    buttonWidget.rerender({
        size: 'small',
        variant: 'secondary'
        // NOTE: We aren't including renderBody() but we expect that content to be preserved
    });

    expect(buttonWidget.el.innerHTML).to.contain('John');
    expect(buttonWidget.el.className).to.equal('app-button app-button-secondary app-button-small');
};