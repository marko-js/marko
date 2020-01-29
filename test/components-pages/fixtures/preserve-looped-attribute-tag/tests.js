var expect = require("chai").expect;

it("should update correctly", function() {
    var $el = document.getElementById("root");
    expect($el.innerHTML).to.eql("<ul><li>A</li><li>B</li><li>C</li></ul>");
});
