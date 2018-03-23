var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should allow fixed IDs for widgets", function() {
        var widget = window.appFixedId;
        expect(widget.el.id).to.equal("appFixedId");
        widget.testGetWidget();
        widget.testGetEl();
    });
});
