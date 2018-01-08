var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index.marko'), { name: 'Frank' });

    expect(component.el.innerHTML).to.contain('Hello Frank!');

    component.setName('Jane');
    component.update();

    expect(component.el.innerHTML).to.contain('Hello Jane!');
};