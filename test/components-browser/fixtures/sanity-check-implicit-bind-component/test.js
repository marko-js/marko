var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index'), { name: 'Frank', age: 30 });

    expect(component.el.innerHTML).to.equal('Frank');

    component.setName('Jane');

    component.update();

    expect(component.el.innerHTML).to.equal('Jane');
};