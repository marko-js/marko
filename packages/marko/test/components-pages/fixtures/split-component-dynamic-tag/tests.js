var expect = require("chai").expect;

it("should initialize components correctly across async boundaries", function(done) {
    var rootButtonEl = window.component.getEl("element");
    expect(rootButtonEl).is.instanceOf(HTMLButtonElement);
    expect(window.component.rootButtonClicks).equals(0);
    rootButtonEl.click();
    expect(window.component.rootButtonClicks).equals(1);

    var appButtonComponent = window.component.getComponent("component");
    expect(appButtonComponent)
        .has.property("el")
        .instanceOf(HTMLButtonElement);
    expect(window.component.appButtonClicks).equals(0);
    appButtonComponent.el.click();
    expect(window.component.appButtonClicks).equals(1);

    done();
});
