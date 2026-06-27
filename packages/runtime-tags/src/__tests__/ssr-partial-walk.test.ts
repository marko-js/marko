import assert from "node:assert/strict";

import { JSDOM } from "jsdom";

// Prototype: prove that the existing dom `walk()` can resume server-rendered
// content by *Get*-ting nodes that already exist in the SSR DOM, instead of
// reading a per-node `*` marker. This is the core of the "partial SSR walk"
// idea — the per-render markers move into a per-section walk string, and resume
// walks each scope from its (branch-marker-established) start node.

// WalkCode building blocks (see common/types.ts).
const NEXT = 67; // +n nextNode
const OVER = 97; // +n nextSibling
const GET = 32; // bind walker.currentNode to scope, positionally
const walkStr = (...codes: number[]) => String.fromCharCode(...codes);

describe("ssr partial walk (prototype)", () => {
  let walk: (start: Node, codes: string, scope: any) => void;

  before(() => {
    // walker.ts creates a TreeWalker over `document` at module eval, so the DOM
    // global must exist first — hence the deferred require (tests run as CJS).
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const g = globalThis as any;
    g.document = dom.window.document;
    g.Text = dom.window.Text;
    g.Comment = dom.window.Comment;
    g.Node = dom.window.Node;

    walk = (require("../dom/walker") as typeof import("../dom/walker")).walk;
  });

  it("jsdom parses `<!>` as a comment node (the SSR separator)", () => {
    const probe = document.createElement("div");
    probe.innerHTML = "a<!>b";
    assert.equal(probe.childNodes.length, 3);
    assert.equal(probe.childNodes[1].nodeType, 8 /* Comment */);
  });

  it("binds each item's dynamic text by walking the live SSR DOM", () => {
    // SSR output for `<for|val,i|><div>${i}: ${val}</div></for>` WITHOUT the
    // per-item `*` markers — only the `<!>` separators remain. `${i}: ` merges
    // into one text node; `${val}` is isolated after the separator.
    const container = document.createElement("div");
    container.innerHTML =
      "<div>0: <!>10</div><div>1: <!>20</div><div>2: <!>30</div>";
    const divs = [...container.children] as HTMLElement[];

    // Partial SSR walk: from the item <div>, Next into "0: " (Get → #text/0),
    // Over past the comment to "10" (Get → #text/1). Get binds existing nodes
    // positionally, matching the template's accessor numbering.
    const ssrWalk = walkStr(NEXT + 1, GET, OVER + 2, GET);

    const scopes = divs.map((div) => {
      const scope: any = {};
      walk(div, ssrWalk, scope);
      return scope;
    });

    scopes.forEach((scope, i) => {
      // #text/1 (${val}) is the resumed binding the `*` marker used to provide.
      assert.equal(scope["#text/1"].nodeType, 3, "bound a text node");
      assert.equal(scope["#text/1"].data, String((i + 1) * 10));
      // #text/0 (${i}) lands on the merged "i: " node — harmless: SSR never
      // updates it (which is exactly why it had no marker).
      assert.equal(scope["#text/0"].data, `${i}: `);
    });
  });

  it("the bound node reference drives reactive updates (resume wiring works)", () => {
    const container = document.createElement("div");
    container.innerHTML = "<div>1: <!>20</div>";
    const div = container.firstElementChild as HTMLElement;
    const scope: any = {};
    walk(div, walkStr(NEXT + 1, GET, OVER + 2, GET), scope);

    // Simulate a signal updating ${val} through the resumed node reference.
    scope["#text/1"].data = "99";
    assert.equal(div.textContent, "1: 99");
  });
});
