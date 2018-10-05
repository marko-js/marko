var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should update correctly", function() {
        var $el = document.getElementById("root");
        expect($el.innerHTML).to.eql("<ul><li>A</li><li>B</li><li>C</li></ul>");
    });
});
