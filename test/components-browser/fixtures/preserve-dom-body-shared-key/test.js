var expect = require("chai").expect;

module.exports = function(helpers) {
    var counter = 0;

    var component = helpers.mount(require.resolve("./index"), {
        counter: counter
    });

    expect(
        helpers.targetEl.querySelector(".unpreserved-counter").innerHTML
    ).to.equal("0");

    component.input = {
        counter: ++counter
    };

    component.update();

    expect(
        helpers.targetEl.querySelector(".unpreserved-counter").innerHTML
    ).to.equal("1");
};

module.exports.fails = true;
