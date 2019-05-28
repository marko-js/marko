var expect = require("chai").expect;

module.exports = function(helpers) {
    var items = ["a", "b", "c"];
    var count = 0;

    var component = helpers.mount(require.resolve("./index"), {
        items: items,
        count: count
    });

    expect(
        helpers.targetEl.firstElementChild.getAttribute("data-count")
    ).to.equal("0");

    Array.from(helpers.targetEl.firstElementChild.childNodes).forEach(child => {
        if (child.tagName === "div") {
            expect(child.getAttribute("data-count")).to.equal("0");
        }
    });

    expect(helpers.targetEl.textContent).to.equal("abc");

    component.input = {
        count: ++count,
        items: [].concat(items).reverse()
    };
    component.update();

    expect(
        helpers.targetEl.firstElementChild.getAttribute("data-count")
    ).to.equal("1");

    Array.from(helpers.targetEl.firstElementChild.childNodes).forEach(child => {
        if (child.tagName === "div") {
            expect(child.getAttribute("data-count")).to.equal("0");
        }
    });

    expect(helpers.targetEl.textContent).to.equal("cba");
};
