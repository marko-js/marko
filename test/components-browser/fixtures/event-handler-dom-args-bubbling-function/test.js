var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var buttonClickCalls = (window.buttonClickCalls = []);

    expect(buttonClickCalls.length).to.equal(0);

    helpers.triggerClick(component.getEl("ok"));

    expect(buttonClickCalls.length).to.equal(1);

    expect(buttonClickCalls[0][0]).to.equal("ok");
    expect(buttonClickCalls[0][1].stopPropagation).to.be.a("function");
    expect(buttonClickCalls[0][2].innerHTML).to.equal("OK");

    helpers.triggerClick(component.getEl("cancel"));

    expect(buttonClickCalls.length).to.equal(2);

    expect(buttonClickCalls[1][0]).to.equal("cancel");
    expect(buttonClickCalls[1][1].stopPropagation).to.be.a("function");
    expect(buttonClickCalls[1][2].innerHTML).to.equal("Cancel");
};
