const expect = require("chai").expect;

module.exports = function(helpers) {
    const component = helpers.mount(require.resolve("./index"), {
        comp: "a"
    });
    // const innerItem = component.getEl("item");
    const innerHTML = "Body";

    expect(helpers.targetEl.innerHTML).to.contain(`<a>${innerHTML}</a>`);
    // expect(innerItem).to.equal(component.inner);
    component.input = {};
    component.update();
    expect(helpers.targetEl.innerHTML).to.contain(`<div>${innerHTML}</div>`);
    // expect(innerItem).to.equal(component.inner);

    component.input = { comp: "span" };
    component.update();
    expect(helpers.targetEl.innerHTML).to.contain(`<span>${innerHTML}</span>`);
    // expect(innerItem).to.equal(component.inner);
};
