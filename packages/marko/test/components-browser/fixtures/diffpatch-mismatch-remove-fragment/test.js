var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var root = component.getEl("root");
    expect(root.innerHTML).to.equal(
        "<span>a</span><span>b</span><span>c</span>"
    );

    var cEl = root.firstElementChild.nextElementSibling.nextElementSibling;
    component.state.count++;
    component.update();

    expect(root.innerHTML).to.equal("<span>c</span>");
    expect(cEl).to.equal(root.firstElementChild);
};
