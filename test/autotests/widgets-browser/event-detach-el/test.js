var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(widget.events.length).to.equal(0);


    widget.input = {
        colors: ['red', 'blue']
    };

    widget.update();

    expect(widget.events.length).to.equal(1);
    expect(widget.events[0].color).to.equal('green');
    expect(widget.events[0].node.innerHTML).to.contain('green');

    widget.input = {
        colors: ['red']
    };

    widget.update();

    expect(widget.events.length).to.equal(2);
    expect(widget.events[1].color).to.equal('blue');
    expect(widget.events[1].node.innerHTML).to.contain('blue');
};