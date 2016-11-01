var expect = require('chai').expect;

module.exports = function(helpers) {
    var checkboxWidget = helpers.mount(require('./index'), {
        label: 'Checkbox'
    });

    var buttonWidget = helpers.mount(require('./components/app-extend-button'), {
        label: 'Button'
    });

    expect(buttonWidget.getEl('label').innerHTML).to.equal('Button');
    expect(checkboxWidget.getEl('label').innerHTML).to.equal('Checkbox');

    expect(buttonWidget.setChecked).to.be.a('undefined');
    expect(checkboxWidget.setChecked).to.be.a('function');

    expect(buttonWidget.el.className).to.not.contain('app-extend-checkbox');
    expect(checkboxWidget.el.className).to.contain('app-extend-checkbox');

    expect(checkboxWidget.isChecked()).to.equal(false);
    helpers.triggerClick(checkboxWidget.getEl('label'));
    expect(checkboxWidget.isChecked()).to.equal(true);
};