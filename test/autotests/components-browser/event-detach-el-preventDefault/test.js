var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(widget.events.length).to.equal(0);


    var finishDetach;

    widget.handleDetach = function(color, event) {
        expect(color).to.equal('green');
        finishDetach = event.detach;
        event.preventDefault();
    };

    widget.input = {
        colors: ['red', 'blue']
    };

    widget.update();

    expect(widget.el.querySelectorAll('li').length).to.equal(3);
    expect(widget.el.querySelectorAll('li')[1].innerHTML).to.contain('green');

    finishDetach();

    expect(widget.el.querySelectorAll('li').length).to.equal(2);
    expect(widget.el.querySelectorAll('li')[1].innerHTML).to.contain('blue');
};