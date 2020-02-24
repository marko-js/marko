var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./template.marko"));
    var el = component.getEl("child");
    expect(el).to.have.property("tagName", "DIV");
    expect(el.getAttribute("data-id")).to.equal("nested-child");
};
