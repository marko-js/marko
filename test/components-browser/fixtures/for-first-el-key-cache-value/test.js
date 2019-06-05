var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.callCount).to.equal(2);

    var fooEl = component.getEl("foo");
    var fooNextSibling = fooEl.nextElementSibling;
    var barEl = component.getEl("bar");
    var barNextSibling = barEl.nextElementSibling;

    expect(fooNextSibling.nextElementSibling).to.equal(barEl);

    component.swap();
    component.update();

    expect(component.callCount).to.equal(4);

    expect(
        component.getEl("bar").nextElementSibling.nextElementSibling
    ).to.equal(component.getEl("foo"));
    expect(component.getEl("foo")).to.equal(fooEl);
    expect(component.getEl("foo").nextElementSibling).to.equal(fooNextSibling);
    expect(component.getEl("bar")).to.equal(barEl);
    expect(component.getEl("bar").nextElementSibling).to.equal(barNextSibling);
};
