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

    var widget = helpers.mount(require('./index'), states.original);

    expect(widget.state.heading).to.equal(states.original.heading);
    expect(widget.state.message).to.equal(states.original.message);
    expect(widget.state.colors).to.deep.equal(states.original.colors);

    widget.replaceState(states.new);
    widget.update();

    expect(widget.state.heading).to.equal(states.new.heading);
    expect(widget.state.message).to.equal(states.new.message); // undefined
    expect(widget.state.colors).to.deep.equal(states.new.colors);
};