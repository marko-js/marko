var expect = require('chai').expect;

module.exports = function (helpers) {
    var widgets = [];

    function renderWidget() {
        var widget = helpers.mount(require('./index'), {});
        widgets.push(widget);
    }

    renderWidget();
    renderWidget();
    renderWidget();

    var ids = {};
    widgets.forEach(function (widget) {
        ids[widget.id] = true;
    });

    expect(widgets.length).to.equal(3);
    expect(Object.keys(ids).length).to.equal(widgets.length);
};