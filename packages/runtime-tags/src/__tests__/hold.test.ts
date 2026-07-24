import assert from "node:assert/strict";

import {
  _hold,
  heldText,
  holdAttr,
  holdCommit,
  holdData,
  holdRenders,
  holdText,
} from "../dom/hold";

// `hold.ts` is dependency-free, so the buffer is exercised directly with plain
// stand-ins for the nodes the DOM helpers would pass it.
function fakeNode(data = "") {
  const attrs: Record<string, string> = {};
  return {
    data,
    textContent: data,
    writes: 0,
    getAttribute: (name: string) =>
      name in attrs ? attrs[name] : (null as string | null),
    setAttribute(name: string, value: string) {
      attrs[name] = value;
      this.writes++;
    },
    removeAttribute(name: string) {
      delete attrs[name];
      this.writes++;
    },
  };
}

describe("hold", () => {
  it("defers updates until the flush drains", () => {
    const node = fakeNode("a");
    holdRenders(() => {
      holdData(node as any, "b");
      assert.equal(node.data, "a", "still holding");
    });
    assert.equal(node.data, "b");
  });

  it("supersedes an earlier update with the latest value", () => {
    const node = fakeNode("a");
    holdRenders(() => {
      holdData(node as any, "b");
      holdData(node as any, "c");
      holdAttr(node as any, "title", "x");
      holdAttr(node as any, "title", "y");
    });
    assert.equal(node.data, "c");
    assert.equal(node.getAttribute("title"), "y");
    assert.equal(node.writes, 1, "superseded attr writes to the DOM once");
  });

  it("skips the write when an update is reverted before draining", () => {
    const node = fakeNode("a");
    holdRenders(() => {
      holdAttr(node as any, "title", "x");
      holdAttr(node as any, "title", null as any);
    });
    assert.equal(node.writes, 0, "value matched the live node, so no write");
  });

  it("reads back the pending value while holding", () => {
    const node = fakeNode(".x~*{}");
    holdRenders(() => {
      holdText(node as any, ".x~*{--a:red;}");
      assert.equal(
        heldText(node as any),
        ".x~*{--a:red;}",
        "a helper that reads its own last write sees it before the drain",
      );
    });
    assert.equal(node.textContent, ".x~*{--a:red;}");
  });

  // A construct that renders again before the drain must commit once, from what
  // is on screen straight to the latest value -- never replaying the steps in
  // between, which would show and then discard intermediate branches.
  describe("superseding a structural commit", () => {
    it("commits once, from the shown state to the latest", () => {
      const applied: string[] = [];
      const scope = {};
      const apply = (from: string, to: string) =>
        applied.push(`${from}->${to}`);
      holdRenders(() => {
        holdCommit(scope, "k", "A", "B", apply);
        holdCommit(scope, "k", "B", "C", apply);
        holdCommit(scope, "k", "C", "D", apply);
      });
      assert.deepEqual(applied, ["A->D"]);
    });

    it("drops what a superseded render built but never showed", () => {
      const dropped: string[] = [];
      const scope = {};
      const drop = (superseded: string, to: string, from: string) => {
        dropped.push(`${superseded} (to=${to}, from=${from})`);
      };
      holdRenders(() => {
        holdCommit(scope, "k", "A", "B", () => {}, drop);
        holdCommit(scope, "k", "B", "C", () => {}, drop);
        holdCommit(scope, "k", "C", "D", () => {}, drop);
      });
      // Each superseded target is released against the state still on screen.
      assert.deepEqual(dropped, ["B (to=C, from=A)", "C (to=D, from=A)"]);
    });

    it("keeps constructs independent and drains them in order", () => {
      const applied: string[] = [];
      const first = {};
      const second = {};
      const apply = (from: string, to: string) =>
        applied.push(`${from}->${to}`);
      holdRenders(() => {
        holdCommit(first, "k", "A", "B", apply);
        holdCommit(second, "k", "X", "Y", apply);
        holdCommit(first, "k", "B", "C", apply);
      });
      assert.deepEqual(applied, ["A->C", "X->Y"]);
    });

    it("holds the construct again after a drain", () => {
      const applied: string[] = [];
      const scope: Record<string, any> = {};
      const apply = (from: string, to: string) =>
        applied.push(`${from}->${to}`);
      holdRenders(() => holdCommit(scope, "k", "A", "B", apply));
      holdRenders(() => holdCommit(scope, "k", "B", "C", apply));
      assert.deepEqual(applied, ["A->B", "B->C"]);
    });
  });

  it("applies value updates before structural commits", () => {
    const order: string[] = [];
    const node = fakeNode("a");
    Object.defineProperty(node, "data", {
      get: () => "a",
      set: () => order.push("value"),
    });
    holdRenders(() => {
      _hold(() => order.push("commit"));
      holdData(node as any, "b");
    });
    assert.deepEqual(order, ["value", "commit"]);
  });
});
