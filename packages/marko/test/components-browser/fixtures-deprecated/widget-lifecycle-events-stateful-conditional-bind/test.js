var expect = require("chai").expect;
var lifecycle = require("./lifecycle-recorder");

module.exports = function (helpers) {
  var widget = helpers.mount(require.resolve("./index"), {
    shouldBind: true,
    name: "Frank"
  });

  var targetEl = helpers.targetEl;

  expect(targetEl.innerHTML).to.contain("Hello Frank!");
  expect(lifecycle.events[widget.id]).to.deep.equal([
    "init",
    "onRender:firstRender"
  ]);

  widget.setState("name", "Jane");

  expect(targetEl.innerHTML).to.contain("Hello Frank!");
  expect(lifecycle.events[widget.id]).to.deep.equal([
    "init",
    "onRender:firstRender"
  ]);

  widget.update();

  expect(targetEl.innerHTML).to.contain("Hello Jane!");
  expect(lifecycle.events[widget.id]).to.deep.equal([
    "init",
    "onRender:firstRender",
    "onBeforeUpdate",
    "onUpdate",
    "onRender"
  ]);

  widget.setState("shouldBind", false);
  widget.update();

  expect(lifecycle.events[widget.id]).to.deep.equal([
    "init",
    "onRender:firstRender",
    "onBeforeUpdate",
    "onUpdate",
    "onRender",
    "onBeforeUpdate",
    "onBeforeDestroy",
    "onDestroy"
  ]);

  widget.setState("shouldBind", true);
  widget.update();

  expect(lifecycle.events[widget.id]).to.deep.equal([
    "init",
    "onRender:firstRender",
    "onBeforeUpdate",
    "onUpdate",
    "onRender",
    "onBeforeUpdate",
    "onBeforeDestroy",
    "onDestroy",
    "init",
    "onRender:firstRender"
  ]);

  lifecycle.reset();
};
