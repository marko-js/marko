var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'));
    var hello = require('./components/hello');

    var targetEl = component.getEl('target');
    hello.renderSync({ name: 'John' }).replace(targetEl);

    expect(component.el.firstChild.className).to.equal('hello');
    expect(component.el.firstChild.innerHTML).to.equal('Hello John');
};