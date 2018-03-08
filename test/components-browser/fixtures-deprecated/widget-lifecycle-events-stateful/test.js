var expect = require("chai").expect;
var lifecycle = require("./lifecycle-recorder");

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {
        name: "Frank",
        messageCount: 10
    });

    var targetEl = helpers.targetEl;

    expect(targetEl.innerHTML).to.contain("Hello Frank!");
    expect(targetEl.innerHTML).to.contain("10");

    expect(lifecycle.events[widget.id]).to.deep.equal([
        "init",
        "onRender:firstRender"
    ]);

    expect(
        lifecycle.events[widget.getWidget("nestedStateful").id]
    ).to.deep.equal(["init", "onRender:firstRender"]);

    expect(lifecycle.events.foo).to.deep.equal([
        "init",
        "onRender:firstRender"
    ]);

    // NOTE: messageCount has an update handler
    widget.setState("messageCount", 999);
    expect(targetEl.innerHTML).to.contain("Hello Frank!");
    expect(targetEl.innerHTML).to.contain("10");
    expect(lifecycle.events[widget.id]).to.deep.equal([
        "init",
        "onRender:firstRender"
    ]);
    widget.update();

    expect(targetEl.innerHTML).to.contain("Hello Frank!");
    expect(targetEl.innerHTML).to.contain("999");

    expect(lifecycle.events[widget.id]).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate"
    ]);

    expect(
        lifecycle.events[widget.getWidget("nestedStateful").id]
    ).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onRender"
    ]);

    expect(lifecycle.events.foo).to.deep.equal([
        "init",
        "onRender:firstRender"
    ]);

    // NOTE: name does *not* have an update handler
    widget.setState("name", "Jane");
    expect(targetEl.innerHTML).to.contain("Hello Frank!");
    expect(targetEl.innerHTML).to.contain("999");
    expect(lifecycle.events[widget.id]).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate"
    ]);
    widget.update();

    expect(targetEl.innerHTML).to.contain("Hello Jane!");
    expect(targetEl.innerHTML).to.contain("999");

    expect(lifecycle.events[widget.id]).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onBeforeUpdate",
        "onUpdate",
        "onRender"
    ]);

    expect(
        lifecycle.events[widget.getWidget("nestedStateful").id]
    ).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onRender"
    ]);

    expect(lifecycle.events.foo).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onRender"
    ]);

    var nestedStateful = widget.getWidget("nestedStateful");

    widget.destroy();

    expect(lifecycle.events[widget.id]).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onBeforeUpdate",
        "onUpdate",
        "onRender",
        "onBeforeDestroy",
        "onDestroy"
    ]);

    expect(lifecycle.events[nestedStateful.id]).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onRender",
        "onBeforeDestroy",
        "onDestroy"
    ]);

    expect(lifecycle.events.foo).to.deep.equal([
        "init",
        "onRender:firstRender",
        "onBeforeUpdate",
        "onUpdate",
        "onRender",
        "onBeforeDestroy",
        "onDestroy"
    ]);

    lifecycle.reset();
};
