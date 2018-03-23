var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"), {
        $global: {
            name: "Frank",
            serializedGlobals: { name: true }
        }
    });

    expect(component.el.querySelector(".name").innerHTML).to.equal("Frank");
    expect(component.el.querySelector(".count").innerHTML).to.equal("1");

    component.state.count++;
    component.update();

    expect(component.el.querySelector(".name").innerHTML).to.equal("Frank");
    expect(component.el.querySelector(".count").innerHTML).to.equal("2");
};
