var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { });

    expect(widget.sayHello('Frank')).to.equal('Hello Frank!');
};