var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"), {
        color: "#09c"
    });

    expect(component.getEl("current").getAttribute("style")).to.equal(
        "color:#09c;"
    );

    component.increment();
    component.update();

    expect(component.getEl("current").getAttribute("style")).to.equal(
        "color:#09c;"
    );
};
