var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var root = component.getEl("root");
    expect(root.dataset.id).to.include("-1");
};
