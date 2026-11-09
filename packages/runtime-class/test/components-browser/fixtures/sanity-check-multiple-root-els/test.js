var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    age: 30,
    url: "http://ebay.com/",
  });

  assert.equal(component.getEl("name").innerHTML, "Frank");
  assert.equal(component.getEl("age").innerHTML, "30");
  assert.equal(component.getEl("link").href, "http://ebay.com/");

  component.setName("Jane");
  component.setAge(50);
  component.setUrl("http://ebay.com/search/");

  component.update();

  assert.equal(component.getEl("name").innerHTML, "Jane");
  assert.equal(component.getEl("age").innerHTML, "50");
  assert.equal(component.getEl("link").href, "http://ebay.com/search/");
};
