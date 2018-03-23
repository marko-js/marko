var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var rootEl = component.el;
    var helloComponent = component.getComponent("hello");
    var worldComponent = component.getComponent("world");
    expect(helloComponent.el.parentNode).to.equal(rootEl);
    expect(worldComponent.el.parentNode).to.equal(rootEl);

    var nestedDivs = rootEl.querySelectorAll("div");
    expect(nestedDivs[0].className).to.equal("hello");
    expect(nestedDivs[1].className).to.equal("world");

    component.state.swapped = true;
    component.update();

    expect(component.getComponent("hello")).to.equal(helloComponent);
    expect(component.getComponent("world")).to.equal(worldComponent);

    var nestedDivsAfter = rootEl.querySelectorAll("div");
    expect(nestedDivsAfter[0].className).to.equal("world");
    expect(nestedDivsAfter[1].className).to.equal("hello");

    expect(nestedDivsAfter[0]).to.equal(nestedDivs[1]);
    expect(nestedDivsAfter[1]).to.equal(nestedDivs[0]);
};
