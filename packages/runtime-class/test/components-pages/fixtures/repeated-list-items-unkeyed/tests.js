var assert = require("assert/strict");

it("should update correctly", function () {
  var listItemsComponent = window.listItemsComponent;
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("li").length, 4);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a").length, 4);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[0].innerHTML, "apples");
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[1].innerHTML, "bananas");
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[2].innerHTML, "cherries");
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[3].innerHTML, "dates");

  listItemsComponent.input = {
    options: ["apples", "bananas"],
  };
  listItemsComponent.update();

  assert.equal(listItemsComponent.getEl("root").querySelectorAll("li").length, 2);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a").length, 2);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[0].innerHTML, "apples");
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[1].innerHTML, "bananas");

  listItemsComponent.input = {
    options: [],
  };
  listItemsComponent.update();

  assert.equal(listItemsComponent.getEl("root").querySelectorAll("li").length, 0);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a").length, 0);

  listItemsComponent.input = {
    options: ["apples", "bananas"],
  };
  listItemsComponent.update();

  assert.equal(listItemsComponent.getEl("root").querySelectorAll("li").length, 2);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a").length, 2);
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[0].innerHTML, "apples");
  assert.equal(listItemsComponent.getEl("root").querySelectorAll("a")[1].innerHTML, "bananas");
});
