var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'), {
        color: 'red'
    });

    expect(component.el.getAttribute('style')).to.equal('color:red;');
    expect(component.getComponent('counter').el.getAttribute('style')).to.equal('color:red;');
    expect(component.getComponent('counter').el.querySelector('.count').innerHTML).to.equal('0');

    component.getComponent('counter').increment();
    component.getComponent('counter').update();

    expect(component.el.getAttribute('style')).to.equal('color:red;');
    expect(component.getComponent('counter').el.getAttribute('style')).to.equal('color:red;');
    expect(component.getComponent('counter').el.querySelector('.count').innerHTML).to.equal('1');

    component.updateColor('green');
    component.update();

    expect(component.el.getAttribute('style')).to.equal('color: green;');
    expect(component.getComponent('counter').el.getAttribute('style')).to.equal('color: green;');
    expect(component.getComponent('counter').el.querySelector('.count').innerHTML).to.equal('1');

    //
    // expect(component.el.style.color).to.equal('#09c;');
    // expect(component.getComponent('counter').el.style.color).to.equal('#09c;');
    //
    // expect(component.getEl('current').getAttribute('style')).to.equal('color:#09c;');
};