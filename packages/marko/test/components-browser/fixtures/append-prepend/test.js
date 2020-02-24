var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"));
    var hello = require("./components/app-hello");

    var renderTarget = component.getEl("renderTarget");
    expect(renderTarget.innerHTML).to.equal("<span>ref</span>");

    hello.renderSync({ value: "before" }).prependTo(renderTarget);
    hello.renderSync({ value: "after" }).appendTo(renderTarget);
    expect(renderTarget.innerHTML).to.equal(
        "<div>Hello before</div><span>ref</span><div>Hello after</div>"
    );
};
