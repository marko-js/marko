var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { name: 'Frank' });
    expect(widget.el.querySelector('.name').innerHTML).to.equal('Frank');
    expect(widget.onInputCalls).to.deep.equal([
        {
            name: 'INITIAL'
        }
    ]);
    expect(widget.name).to.equal('Frank');

    widget.input = { name: 'John' };
    widget.update();

    expect(widget.onInputCalls).to.deep.equal([
        {
            name: 'INITIAL'
        },
        {
            name: 'Frank'
        }
    ]);

    expect(widget.el.querySelector('.name').innerHTML).to.equal('John');
    expect(widget.name).to.equal('John');
};
