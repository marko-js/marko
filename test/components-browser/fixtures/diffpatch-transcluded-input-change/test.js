var expect = require("chai").expect;

module.exports = function(helpers) {
    let app = helpers.mount(require.resolve("./index"));

    var item = app.getComponent("item");
    expect(item).to.be.an("object");

    var wrapper = app.getComponent("wrapper");

    // force update
    wrapper.forceUpdate();
    wrapper.update();
    item = app.getComponent("item");
    expect(item).to.be.an("object");

    // state update
    wrapper.state.updated = true;
    wrapper.update();
    item = app.getComponent("item");
    expect(item).to.be.an("object");

    // input update
    wrapper.input = {};
    wrapper.update();
    item = app.getComponent("item");
    expect(item).to.be.an("object");
};
module.exports.fails = "issue #1087";
