var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(helpers.targetEl.querySelector("h1") != null).to.equal(true);
    expect(helpers.targetEl.querySelector("div") != null).to.equal(true);

    component.state.show = false;
    component.update();

    expect(helpers.targetEl.querySelector("h1") == null).to.equal(true);
    expect(helpers.targetEl.querySelector("div") == null).to.equal(true);

    expect(component.isDestroyed()).to.equal(false);
};
