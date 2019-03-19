var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"), {});
    var root = component.getEl("root");
    expect(root.textContent).to.equal("number: 123: number");
    component.hide();
    component.update();
    expect(root.textContent).to.equal("");
};
