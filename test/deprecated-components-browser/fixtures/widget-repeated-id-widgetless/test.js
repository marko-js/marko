var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    var childWidgets = widget.getWidgets('childWidget');
    expect(childWidgets.length).to.equal(3);
};