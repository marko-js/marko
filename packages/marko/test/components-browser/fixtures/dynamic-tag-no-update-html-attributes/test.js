var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var root = component.getEl("root");
    var tag = root.querySelector(".initial");

    expect(tag).to.have.property("className", "initial");

    tag.className = "changed";
    component.forceUpdate();
    component.update();

    // Should not update the class again.
    expect(tag).to.have.property("className", "changed");

    component.changeClass();
    component.update();
    expect(tag).to.have.property("className", "changed");
};
