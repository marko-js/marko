var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var newTarget = document.createElement("div");
    document.body.appendChild(newTarget);
    component.increment();
    component.update();
    component.appendTo(newTarget);
    expect(newTarget.innerHTML).to.equal("Hello World 1");
    component.increment();
    component.update();
    expect(newTarget.innerHTML).to.equal("Hello World 2");
};
