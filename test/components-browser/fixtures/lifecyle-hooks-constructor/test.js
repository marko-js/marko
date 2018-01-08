var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank' });
    expect(component.el.querySelector('.name').innerHTML).to.equal('Frank');
    expect(component.onInputCalls).to.deep.equal([{
        name: 'INITIAL'
    }]);
    expect(component.name).to.equal('Frank');

    component.input = { name: 'John' };
    component.update();

    expect(component.onInputCalls).to.deep.equal([{
        name: 'INITIAL'
    }, {
        name: 'Frank'
    }]);

    expect(component.el.querySelector('.name').innerHTML).to.equal('John');
    expect(component.name).to.equal('John');
};