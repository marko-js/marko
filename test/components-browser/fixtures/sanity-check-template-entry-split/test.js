var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index.marko'), { name: 'Frank' });

    expect(component.el.innerHTML).to.contain('FRANK');

    component.setName('Jane');

    expect(component.el.innerHTML).to.contain('Jane');
};