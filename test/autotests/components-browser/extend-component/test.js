var expect = require('chai').expect;
var markoComponents = require('marko/components');

module.exports = function(helpers) {
    var checkboxComponent = helpers.mount(require('./components/app-checkbox'), {
        checked: true,
        'class': 'my-checkbox',
        data: 123
    });

    var el = helpers.targetEl.querySelector('.my-checkbox');
    expect(el != null).to.equal(true);

    var componentForEl = markoComponents.getComponentForEl(el);

    expect(componentForEl).to.equal(checkboxComponent);
};