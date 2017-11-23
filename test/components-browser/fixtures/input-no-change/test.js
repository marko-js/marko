var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'), {
        name: 'Frank'
    });

    expect(component.el.querySelector('.render-count').innerHTML).to.equal('0');
    expect(component.el.querySelector('.name').innerHTML).to.equal('Frank');

    // Rerender with a new props object that has the shallow properties
    component.input = {
        name: 'Frank'
    };

    component.update();

    expect(component.el.querySelector('.render-count').innerHTML).to.equal('0');
    expect(component.el.querySelector('.name').innerHTML).to.equal('Frank');

    // Rerender with a new props object that has the shallow properties
    component.input = {
        name: 'John'
    };

    component.update();

    expect(component.el.querySelector('.render-count').innerHTML).to.equal('1');
    expect(component.el.querySelector('.name').innerHTML).to.equal('John');
};