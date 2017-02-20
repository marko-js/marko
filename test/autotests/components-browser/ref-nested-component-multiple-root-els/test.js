var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { name: 'Frank', age: 30 });
    var fooWidget = widget.getWidget('foo');
    expect(fooWidget != null).to.equal(true);
    expect(fooWidget.getName()).to.equal('Frank');
    expect(fooWidget.getAge()).to.equal('30');
};