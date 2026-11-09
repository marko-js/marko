var assert = require("assert/strict");

module.exports = function (helpers) {
  var el = helpers.vdom
    .createElement(
      "div",
      {
        class: "foo",
        onclick: "doSomething()",
      },
      null,
      null,
      1 /* childCount */,
    )
    .e(
      "svg",
      {
        width: "100",
        height: "100",
      },
      null,
      null,
      1,
    )
    .e(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: "40",
        stroke: "green",
        "stroke-width": "4",
        fill: "yellow",
        "xlink:href": "http://ebay.com/",
      },
      null,
      null,
      0,
    );

  var clone = el.___cloneNode();
  assert.notEqual(clone, el);
  assert.equal(clone.___nodeName, "div");
  assert.equal(clone.___attributes.class === "foo", true);
  assert.equal(clone.firstChild, el.firstChild);

  var root = helpers.vdom.createElement("div", { class: "root" });

  root.___appendChild(clone);

  assert.equal(el.___parentNode, null);
  assert.equal(clone.___parentNode, root);

  return root;
};
