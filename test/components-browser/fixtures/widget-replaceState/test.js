var expect = require('chai').expect;

module.exports = function (helpers) {

    var states = {
        original: {
            heading: 'original colors',
            message: 'These are primary colors!',
            colors: ['red', 'green', 'blue']
        },
        new: {
            heading: 'new colors',
            colors: ['orange', 'yellow', 'purple']
        }
    };

    var component = helpers.mount(require('./index'), states.original);

    expect(component.state.heading).to.equal(states.original.heading);
    expect(component.state.message).to.equal(states.original.message);
    expect(component.state.colors).to.deep.equal(states.original.colors);

    component.replaceState(states.new);
    component.update();

    expect(component.state.heading).to.equal(states.new.heading);
    expect(component.state.message).to.equal(states.new.message); // undefined
    expect(component.state.colors).to.deep.equal(states.new.colors);
};