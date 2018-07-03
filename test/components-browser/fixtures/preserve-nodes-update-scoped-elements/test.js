var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var rootEl = component.getEl();
    var inputEl = rootEl.querySelector("input");

    component.hide();
    component.update();

    expect(
        null === rootEl.querySelector("label"),
        "label should have been removed"
    ).to.equal(true);
    expect(
        inputEl === rootEl.querySelector("input"),
        "input should not have been removed"
    ).to.equal(true);
};
