var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), { show: true });
    var rootEl = component.getEl("root");

    expect(rootEl.innerHTML).to.contain("<span>hello</span>");

    component.input = {};
    component.update();

    expect(rootEl.innerHTML).to.not.contain("<span>hello</span>");

    component.input = { show: true };
    component.update();

    expect(rootEl.innerHTML).to.contain("<span>hello</span>");
};
