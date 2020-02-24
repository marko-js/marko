var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.mouseMoveEvent).to.equal(undefined);

    // First button
    helpers.triggerMouseMove(component.getEl("ok"));

    expect(component.mouseMoveEventCalls.length).to.equal(1);
    expect(component.mouseMoveEventCalls[0][0]).to.equal("ok");
    expect(component.mouseMoveEventCalls[0][1].stopPropagation).to.be.a(
        "function"
    );
    expect(component.mouseMoveEventCalls[0][2].innerHTML).to.equal("OK");

    helpers.triggerMouseMove(component.getEl("ok"));
    expect(component.mouseMoveEventCalls.length).to.equal(1);

    // Second button
    helpers.triggerMouseMove(component.getEl("cancel"));

    expect(component.mouseMoveEventCalls.length).to.equal(2);
    expect(component.mouseMoveEventCalls[1][0]).to.equal("cancel");
    expect(component.mouseMoveEventCalls[1][1].stopPropagation).to.be.a(
        "function"
    );
    expect(component.mouseMoveEventCalls[1][2].innerHTML).to.equal("Cancel");

    helpers.triggerMouseMove(component.getEl("cancel"));
    expect(component.mouseMoveEventCalls.length).to.equal(2);
};
