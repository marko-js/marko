var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it.fails("should update correctly", function() {
        var component = window.component;
        var $button = component.getEl("button");
        expect($button.textContent).to.eql("button label");

        $button.click();
        component.update();

        expect($button.textContent).to.eql("button label test");
    }).details =
        "issue #912";
});
