var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank',
        index: 0
    });

    var fooComponent = component.getComponent('foo');

    expect(fooComponent.el.querySelector('.body').innerHTML).to.equal('Current index: 0');
    expect(fooComponent.el.querySelector('span').innerHTML).to.equal('Hello Frank!');

    fooComponent.state.name = 'Jane';

    fooComponent.update();

    expect(fooComponent.el.querySelector('.body').innerHTML).to.equal('Current index: 0');
    expect(fooComponent.el.querySelector('span').innerHTML).to.equal('Hello Jane!');
};