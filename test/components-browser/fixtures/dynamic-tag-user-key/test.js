var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.helloReceived).to.equal(false);

    helpers.targetEl.querySelector("button").click();

    expect(component.helloReceived).to.equal(true);
};
