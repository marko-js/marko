"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var expect = chai.expect;

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
      expect(calls).to.deep.equal([
        ["onCreate", 1],
        ["onInput", 1],
        ["onRender"],
      ]);
    });

    it("keeps the original input when onInput returns nothing", function () {
      var input = { a: 1 };
      expect(create(input).input).to.equal(input);
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
      expect(component.input).to.equal(replaced);
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
      expect(component.input).to.equal(assigned);
    });

    it("is never destroyed", function () {
      expect(create().isDestroyed()).to.equal(false);
    });
  });

  describe("elId", function () {
    it("is the component id on its own", function () {
      expect(create().elId()).to.equal("c1");
      expect(create().elId(null)).to.equal("c1");
    });

    it("appends a nested id", function () {
      expect(create().elId("body")).to.equal("c1-body");
    });

    it("moves a leading # in front of the component id", function () {
      expect(create().elId("#body")).to.equal("#c1-body");
    });

    it("stringifies a non-string nested id", function () {
      expect(create().elId(0)).to.equal("c1-0");
      expect(create().elId(1)).to.equal("c1-1");
    });

    it("is also reachable as getElId", function () {
      var component = create();
      expect(component.getElId).to.equal(component.elId);
      expect(component.getElId("body")).to.equal("c1-body");
    });
  });

  describe("state", function () {
    it("round-trips through the accessors", function () {
      var component = create();
      var state = { a: 1 };
      component.state = state;
      expect(component.state).to.equal(state);
      expect(component.___rawState).to.equal(state);
    });

    it("adopts an object when there is no state yet", function () {
      var component = create();
      var next = { a: 1 };
      component.setState(next);
      expect(component.state).to.equal(next);
    });

    it("merges an object into existing state", function () {
      var component = create();
      component.state = { a: 1 };
      component.setState({ b: 2 });
      expect(component.state).to.deep.equal({ a: 1, b: 2 });
    });

    it("assigns a single key", function () {
      var component = create();
      component.state = { a: 1 };
      component.setState("b", 2);
      expect(component.state).to.deep.equal({ a: 1, b: 2 });
    });

    it("treats setStateDirty the same way", function () {
      var adopted = create();
      var next = { a: 1 };
      adopted.setStateDirty(next);
      expect(adopted.state).to.equal(next);

      var merged = create();
      merged.state = { a: 1 };
      merged.setStateDirty({ b: 2 });
      merged.setStateDirty("c", 3);
      expect(merged.state).to.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it("replaces the whole state", function () {
      var component = create();
      component.state = { a: 1 };
      var next = { b: 2 };
      component.replaceState(next);
      expect(component.state).to.equal(next);
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
        expect(function () {
          create()[name]();
        }).to.throw(name + " method not supported during SSR.");
      });
    });
  });
});
