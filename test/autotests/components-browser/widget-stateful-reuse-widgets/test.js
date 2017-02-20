var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});

    var oldButton1Component = component.getComponent('button1');
    var oldButton2Component = component.getEl('button2').__component;
    var oldButton1El = oldButton1Component.el;
    var oldButton2El = component.getEl('button2');

    expect(component.getComponent('button1').el.className).to.contain('normal');

    var self = component;

    self.setButtonSize('small');
    self.update();

    var newButton1El = component.getComponent('button1').el;
    var newButton2El = component.getEl('button2');

    // // Both button components should be reused
    expect(component.getComponent('button1')).to.equal(oldButton1Component);
    expect(component.getEl('button2').__component).to.equal(oldButton2Component);

    expect(component.getComponent('button1').el.className).to.contain('small');


    // // State changed for button1 so it should have a new el
    // // since it re-renders to update its view
    // console.log('newButton1El: ', newButton1El);
    expect(newButton1El === oldButton1El).to.equal(true);

    //
    // // State didn't change for button2 so it should be the same el
    expect(newButton2El).to.equal(oldButton2El);
};