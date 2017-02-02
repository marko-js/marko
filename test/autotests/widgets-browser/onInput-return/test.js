var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank'
    });

    expect(widget.input.name).to.equal('FRANK');
    expect(widget.el.querySelector('.name').innerHTML).to.equal('FRANK');

    widget.input = {
        name: 'John'
    };

    widget.update();

    expect(widget.input.name).to.equal('JOHN');
    expect(widget.el.querySelector('.name').innerHTML).to.equal('JOHN');
};