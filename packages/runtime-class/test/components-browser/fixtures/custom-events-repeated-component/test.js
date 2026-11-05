var assert = require("assert/strict");
var lookup = require("./lookup");

var items = [
  {
    id: 0,
    title: "Item 1",
  },
  {
    id: 1,
    title: "Item 2",
  },
  {
    id: 2,
    title: "Item 3",
  },
];

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    items: items,
  });

  assert.equal(Object.keys(lookup.componentsById).length, 3);

  assert.notEqual(lookup.componentsById[0].id, lookup.componentsById[1].id);

  lookup.componentsById[0].emitPurchase();
  assert.deepEqual(component.purchaseEvents, [
    {
      id: 0,
      title: "Item 1",
    },
  ]);

  lookup.componentsById[1].emitPurchase();
  assert.deepEqual(component.purchaseEvents, [
    {
      id: 0,
      title: "Item 1",
    },
    {
      id: 1,
      title: "Item 2",
    },
  ]);
};
