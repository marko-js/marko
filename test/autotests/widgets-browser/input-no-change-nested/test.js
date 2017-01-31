var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        name: 'Frank'
    });

    expect(widget.getWidget('foo').el.querySelector('.render-count').innerHTML).to.equal('0');
    expect(widget.getWidget('foo').el.querySelector('.name').innerHTML).to.equal('Frank');

    // Rerender with a new props object that has the shallow properties
    widget.input = {
        name: 'Frank'
    };

    widget.update();

    expect(widget.getWidget('foo').el.querySelector('.render-count').innerHTML).to.equal('0');
    expect(widget.getWidget('foo').el.querySelector('.name').innerHTML).to.equal('Frank');


    // Rerender with a new props object that has the shallow properties
    widget.input = {
        name: 'John'
    };

    widget.update();

    expect(widget.getWidget('foo').el.querySelector('.render-count').innerHTML).to.equal('1');
    expect(widget.getWidget('foo').el.querySelector('.name').innerHTML).to.equal('John');
};