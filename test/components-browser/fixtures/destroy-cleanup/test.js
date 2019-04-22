const expect = require("chai").expect;

module.exports = function(helpers) {
    const component = helpers.mount(require.resolve("./index"), {});
    const root = component.getEl("root");
    const before = component.before;

    expect(root.parentNode).to.equal(helpers.targetEl);
    expect(before.parentNode).to.equal(helpers.targetEl);
    component.destroy();
    expect(root.parentNode).to.equal(null);
    expect(before.parentNode).to.equal(null);
};
