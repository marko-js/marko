var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var innerComponent = component.getComponent("inner");

    expect(helpers.targetEl.querySelector(".inner").innerHTML).to.equal("0");

    component.state.count++;
    component.update();

    expect(component.getComponent("inner")).to.equal(innerComponent);

    expect(helpers.targetEl.querySelector(".inner").innerHTML).to.equal("1");
};
