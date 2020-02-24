var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), { show: false });
    var container = component.getComponent("container");

    container.state.show = true;
    container.update();

    var eventTarget = helpers.targetEl.querySelector("#eventTarget");
    var eventFired = false;

    component.on("eventFired", function() {
        eventFired = true;
    });

    eventTarget.focus();
    expect(eventFired).to.equal(true);
};
