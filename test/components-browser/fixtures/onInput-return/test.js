var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    expect(component.input.name).to.equal('FRANK');
    expect(component.el.querySelector('.name').innerHTML).to.equal('FRANK');

    component.input = {
        name: 'John'
    };

    component.update();

    expect(component.input.name).to.equal('JOHN');
    expect(component.el.querySelector('.name').innerHTML).to.equal('JOHN');
};