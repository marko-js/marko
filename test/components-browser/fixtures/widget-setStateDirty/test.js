var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(component.el.innerHTML).to.contain('red');
    expect(component.el.innerHTML).to.contain('green');
    expect(component.el.innerHTML).to.contain('blue');

    component.addColor('orange');
    component.update();

    expect(component.el.innerHTML).to.contain('red');
    expect(component.el.innerHTML).to.contain('green');
    expect(component.el.innerHTML).to.contain('blue');
    expect(component.el.innerHTML).to.contain('orange');
};