var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var rootEl = component.el;
    var spanEl = rootEl.querySelector("span");

    component.state.count = 1;
    component.update();

    expect(component.el).to.equal(rootEl);
    expect(rootEl.querySelector("span").innerHTML).to.equal("1");
    expect(rootEl.querySelector("span")).to.equal(spanEl);
};
