var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var innerComponent = component.getComponent("inner");

    expect(innerComponent.___startNode.className).to.equal("inner");
    expect(component.___startNode).to.not.equal(innerComponent.___startNode);
    expect(component.___endNode).to.not.equal(innerComponent.___endNode);
    expect(helpers.targetEl.querySelector(".inner").innerHTML).to.equal("0");

    component.state.count++;
    component.update();

    innerComponent = component.getComponent("inner");

    expect(innerComponent.___startNode.className).to.equal("inner");
    expect(component.___startNode).to.not.equal(innerComponent.___startNode);
    expect(component.___endNode).to.not.equal(innerComponent.___endNode);
    expect(helpers.targetEl.querySelector(".inner").innerHTML).to.equal("1");
};
