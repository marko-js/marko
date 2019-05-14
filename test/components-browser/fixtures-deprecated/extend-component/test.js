var expect = require("chai").expect;

module.exports = function(helpers) {
    helpers.mount(require.resolve("./components/app-checkbox"), {
        checked: true,
        class: "my-checkbox",
        data: 123
    });

    expect(helpers.targetEl.children.length).to.equal(1);
    expect(helpers.targetEl.children[0].nodeName).to.equal("BUTTON");

    var el = helpers.targetEl.querySelector(".my-checkbox");
    expect(el != null).to.equal(true);
};
