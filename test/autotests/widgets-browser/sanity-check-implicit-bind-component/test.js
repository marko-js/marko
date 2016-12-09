var expect = require('chai').expect;

module.exports = function(helpers) {

    var widget = helpers.mount(require('./index'), { name: 'Frank', age: 30 });

    expect(widget.el.innerHTML).to.equal('Frank');

    widget.setName('Jane');

    widget.update();

    expect(widget.el.innerHTML).to.equal('Jane');
};