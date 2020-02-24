var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./template.marko"));
    var el = component.el;
    expect(el).to.have.property("tagName", "DIV");
    expect(el.getAttribute("data-id")).to.equal("nested-child");
};
