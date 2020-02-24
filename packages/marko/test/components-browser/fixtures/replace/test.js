var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"));
    var hello = require("./components/hello");

    var targetEl = component.getEl("target");
    hello.renderSync({ name: "John" }).replace(targetEl);

    expect(component.el.firstElementChild.className).to.equal("hello");
    expect(component.el.firstElementChild.innerHTML).to.equal("Hello John");
};
