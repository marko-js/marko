var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red']
    });

    expect(component.events.length).to.equal(0);


    component.input = {
        colors: ['red', 'blue']
    };

    component.update();

    expect(component.events.length).to.equal(1);
    expect(component.events[0].color).to.equal('blue');
    expect(component.events[0].node).to.equal(component.el.querySelectorAll('li')[1]);

    component.input = {
        colors: ['red', 'green', 'blue']
    };

    component.update();

    expect(component.events.length).to.equal(2);
    expect(component.events[1].color).to.equal('green');
    expect(component.events[1].node).to.equal(component.el.querySelectorAll('li')[1]);
};