var expect = require('chai').expect;

module.exports = function (helpers, done) {

    var component = helpers.mount(require('./index'), { name: 'Frank' });

    expect(component.el.innerHTML).to.contain('Hello Frank!');

    component.setName('Jane');

    expect(component.el.innerHTML).to.contain('Hello Frank!');

    component.onUpdate = function () {
        expect(component.el.innerHTML).to.contain('Hello Jane!');
        done();
    };
};