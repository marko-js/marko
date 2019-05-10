const expect = require("chai").expect;

module.exports = function(helpers) {
    const component = helpers.mount(require.resolve("./index"), {});
    // const innerItem = component.getEl("item");
    const innerHTML = "<span>Body</span>";

    expect(helpers.targetEl.innerHTML).to.contain(`<a>${innerHTML}</a>`);
    // expect(innerItem).to.equal(component.inner);
    component.changeComp(null);
    component.update();
    expect(helpers.targetEl.innerHTML).to.contain(`<div>${innerHTML}</div>`);
    // expect(innerItem).to.equal(component.inner);

    component.changeComp("span");
    component.update();
    expect(helpers.targetEl.innerHTML).to.contain(`<span>${innerHTML}</span>`);
    // expect(innerItem).to.equal(component.inner);
};
