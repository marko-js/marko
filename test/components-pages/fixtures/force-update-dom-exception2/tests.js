var path = require("path");
var expect = require("chai").expect;

describe.only(path.basename(__dirname), function() {
    it.fails("should update correctly", function() {
        var component = window.appComponent;

        component.show = true;
        component.forceUpdate();
        component.update();

        component.show = false;
        component.forceUpdate();
        component.update();

        component.show = true;
        component.forceUpdate();

        expect(() => {
            component.update();
        }).to.not.throw();
    }).details =
        "issue #1059";
});
