var expect = require('chai').expect;
var markoWidgets = require('marko/widgets');

module.exports = function(helpers) {
    var checkboxWidget = helpers.mount(require('./components/app-checkbox'), {
        checked: true,
        'class': 'my-checkbox',
        data: 123
    });

    var el = helpers.targetEl.querySelector('.my-checkbox');
    expect(el != null).to.equal(true);

    var widgetForEl = markoWidgets.getWidgetForEl(el);

    expect(widgetForEl).to.equal(checkboxWidget);
};