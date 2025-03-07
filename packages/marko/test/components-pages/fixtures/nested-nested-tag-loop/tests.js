var expect = require("chai").expect;
var markoComponents = require("marko/components");

it("should serialize component config down to the browser", function () {
  var list = document.getElementById("my-list");
  expect(list.firstChild.innerHTML).to.equal("a");
});
