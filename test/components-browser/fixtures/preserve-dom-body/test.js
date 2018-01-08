var expect = require('chai').expect;

module.exports = function (helpers) {
    var counter = 0;

    var component = helpers.mount(require('./index'), {
        counter: counter
    });

    expect(component.el.querySelector('.unpreserved-counter').innerHTML).to.equal('0');
    expect(component.getEl('preserve').getAttribute('data-counter')).to.equal('0');
    expect(component.el.querySelector('.preserved-counter').innerHTML).to.equal('0');

    component.input = {
        counter: ++counter
    };

    component.update();

    expect(component.el.querySelector('.unpreserved-counter').innerHTML).to.equal('1');
    expect(component.getEl('preserve').getAttribute('data-counter')).to.equal('1');
    expect(component.el.querySelector('.preserved-counter').innerHTML).to.equal('0');
};