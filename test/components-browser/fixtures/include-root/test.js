var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    helpers.triggerMouseEvent(component.getEl("button"), "click");
    expect(component.clicked).to.equal(true);
};
