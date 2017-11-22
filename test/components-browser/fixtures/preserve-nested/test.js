var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.el.querySelector('.render-count').innerHTML).to.equal('0');

    component.forceUpdate();
    component.update();

    expect(component.el.querySelector('.render-count').innerHTML).to.equal('0');
};