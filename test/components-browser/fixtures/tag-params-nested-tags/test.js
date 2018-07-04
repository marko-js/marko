var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    expect(helpers.targetEl.innerHTML).to.contain("Hello, Anna!");
    var nameComponent = component.getComponent("name");
    nameComponent.changeName();
    nameComponent.update();
    expect(helpers.targetEl.innerHTML).to.contain("Hello, Vickie!");
};
