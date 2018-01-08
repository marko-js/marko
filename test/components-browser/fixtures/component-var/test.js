var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index.marko'), {
        firstName: 'John',
        lastName: 'Doe'
    });

    expect(component.el.innerHTML).to.contain('Hello John Doe!');

    component.input = {
        firstName: 'Jane',
        lastName: 'Doe'
    };

    component.update();

    expect(component.el.innerHTML).to.contain('Hello Jane Doe!');
};