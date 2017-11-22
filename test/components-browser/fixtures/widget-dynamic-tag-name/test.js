var expect = require('chai').expect;

module.exports = function (helpers) {
    function renderComponent(rootTagName) {
        var component = helpers.mount(require('./index'), {
            rootTagName: rootTagName
        });
        return component;
    }

    var componentDiv = renderComponent('div');
    var componentSpan = renderComponent('span');

    expect(componentDiv.el.nodeName).to.equal('DIV');
    expect(componentSpan.el.nodeName).to.equal('SPAN');
};