var expect = require("chai").expect;

it("should should have mounted the component", function() {
    expect(window.counterComponent).to.not.equal(undefined);
});

it("should be interactive", function() {
    var btn = window.counterComponent.getEl("button");
    expect(btn.textContent).to.equal("Count: 0");
    btn.click();
    window.counterComponent.update();
    expect(btn.textContent).to.equal("Count: 1");
});
