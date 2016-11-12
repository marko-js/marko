var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank'
    });
    expect(widget.el.innerHTML).to.contain('Hello FRANK!');
};