var expect = require('chai').expect;

module.exports = function (helpers) {
    var components = [];

    function renderComponent() {
        var component = helpers.mount(require('./index'), {});
        components.push(component);
    }

    renderComponent();
    renderComponent();
    renderComponent();

    var ids = {};
    components.forEach(function (component) {
        ids[component.id] = true;
    });

    expect(components.length).to.equal(3);
    expect(Object.keys(ids).length).to.equal(components.length);
};