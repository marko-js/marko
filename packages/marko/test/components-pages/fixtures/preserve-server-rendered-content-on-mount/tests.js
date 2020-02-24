var expect = require("chai").expect;

it("should update correctly", function() {
    var $el = document.getElementById("root");
    expect($el).has.property("textContent", "Is Server: true");
});
