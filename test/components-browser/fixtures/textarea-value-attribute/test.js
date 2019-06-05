var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"));
    var textarea = component.getEl("textarea");

    expect(textarea.value).to.equal("Hello");

    component.state.value = "World";
    component.update();

    expect(textarea.value).to.equal("World");

    component.state.value = false;
    component.update();

    expect(textarea.value).to.equal("");

    component.state.value = undefined;
    component.update();

    expect(textarea.value).to.equal("");

    component.state.value = null;
    component.update();

    expect(textarea.value).to.equal("");

    component.state.value = 0;
    component.update();

    expect(textarea.value).to.equal("0");
};
