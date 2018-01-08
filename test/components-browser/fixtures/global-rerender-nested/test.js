var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'), {
        $global: {
            name: 'Frank'
        }
    });

    expect(component.el.querySelector('.name').innerHTML).to.equal('Frank');
    expect(component.el.querySelector('.count').innerHTML).to.equal('1');

    component.state.count++;
    component.update();

    expect(component.el.querySelector('.name').innerHTML).to.equal('Frank');
    expect(component.el.querySelector('.count').innerHTML).to.equal('2');
};