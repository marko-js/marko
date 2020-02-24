var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./template.marko"));

    expect(component.getEl("child").tagName).to.equal("SPAN");
};
