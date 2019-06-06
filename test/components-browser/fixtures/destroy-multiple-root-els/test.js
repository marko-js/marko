var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {
        name: "Frank",
        age: 30
    });

    var nameEl = component.getEl("name");
    var ageEl = component.getEl("age");
    var linkEl = component.getEl("link");

    expect(nameEl.parentNode != null).to.equal(true);
    expect(ageEl.parentNode != null).to.equal(true);
    expect(linkEl.parentNode != null).to.equal(true);

    component.destroy();

    expect(nameEl.parentNode == null).to.equal(true);
    expect(ageEl.parentNode == null).to.equal(true);
    expect(linkEl.parentNode == null).to.equal(true);
};
