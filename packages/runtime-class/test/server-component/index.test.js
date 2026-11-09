"use strict";

require("../__util__/test-init");

var assert = require("assert/strict");

var ServerComponent = require("marko/src/runtime/components/ServerComponent");

function create(input, proto) {
  var Component = class extends ServerComponent {};
  if (proto) Object.assign(Component.prototype, proto);
  return new Component("c1", input || {}, {}, "my-component", null, null);
}

describe("ServerComponent", function () {
  describe("lifecycle", function () {
    it("runs create, input and render in order", function () {
      var calls = [];
      create(
        { a: 1 },
        {
          onCreate: function (input) {
            calls.push(["onCreate", input.a]);
          },
          onInput: function (input) {
            calls.push(["onInput", input.a]);
          },
          onRender: function () {
            calls.push(["onRender"]);
          },
        },
      );
      assert.deepEqual(calls, [["onCreate", 1], ["onInput", 1], ["onRender"]]);
    });

    it("keeps the original input when onInput returns nothing", function () {
      var input = { a: 1 };
      assert.equal(create(input).input, input);
    });

    it("takes the input onInput returns instead", function () {
      var replaced = { b: 2 };
      var component = create(
        { a: 1 },
        {
          onInput: function () {
            return replaced;
          },
        },
      );
      assert.equal(component.input, replaced);
    });

    it("leaves an input assigned during onInput alone", function () {
      var assigned = { c: 3 };
      var component = create(
        { a: 1 },
        {
          onInput: function () {
            this.input = assigned;
            return { b: 2 };
          },
        },
      );
      assert.equal(component.input, assigned);
    });

    it("is never destroyed", function () {
      assert.equal(create().isDestroyed(), false);
    });
  });

  describe("elId", function () {
    it("is the component id on its own", function () {
      assert.equal(create().elId(), "c1");
      assert.equal(create().elId(null), "c1");
    });

    it("appends a nested id", function () {
      assert.equal(create().elId("body"), "c1-body");
    });

    it("moves a leading # in front of the component id", function () {
      assert.equal(create().elId("#body"), "#c1-body");
    });

    it("stringifies a non-string nested id", function () {
      assert.equal(create().elId(0), "c1-0");
      assert.equal(create().elId(1), "c1-1");
    });

    it("is also reachable as getElId", function () {
      var component = create();
      assert.equal(component.getElId, component.elId);
      assert.equal(component.getElId("body"), "c1-body");
    });
  });

  describe("state", function () {
    it("round-trips through the accessors", function () {
      var component = create();
      var state = { a: 1 };
      component.state = state;
      assert.equal(component.state, state);
      assert.equal(component.___rawState, state);
    });

    it("adopts an object when there is no state yet", function () {
      var component = create();
      var next = { a: 1 };
      component.setState(next);
      assert.equal(component.state, next);
    });

    it("merges an object into existing state", function () {
      var component = create();
      component.state = { a: 1 };
      component.setState({ b: 2 });
      assert.deepEqual(component.state, { a: 1, b: 2 });
    });

    it("assigns a single key", function () {
      var component = create();
      component.state = { a: 1 };
      component.setState("b", 2);
      assert.deepEqual(component.state, { a: 1, b: 2 });
    });

    it("treats setStateDirty the same way", function () {
      var adopted = create();
      var next = { a: 1 };
      adopted.setStateDirty(next);
      assert.equal(adopted.state, next);

      var merged = create();
      merged.state = { a: 1 };
      merged.setStateDirty({ b: 2 });
      merged.setStateDirty("c", 3);
      assert.deepEqual(merged.state, { a: 1, b: 2, c: 3 });
    });

    it("replaces the whole state", function () {
      var component = create();
      component.state = { a: 1 };
      var next = { b: 2 };
      component.replaceState(next);
      assert.equal(component.state, next);
    });
  });

  describe("client-only methods", function () {
    [
      "subscribeTo",
      "emit",
      "getEl",
      "getEls",
      "getComponent",
      "getComponents",
      "forceUpdate",
      "update",
    ].forEach(function (name) {
      it(name + " reports that it is unavailable during SSR", function () {
        assert.throws(
          function () {
            create()[name]();
          },
          { message: name + " method not supported during SSR." },
        );
      });
    });
  });
});
