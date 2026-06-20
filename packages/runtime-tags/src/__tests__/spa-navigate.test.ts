import assert from "node:assert/strict";

import { JSDOM } from "jsdom";

import {
  applyServerUpdate,
  createNavigator,
  executeScripts,
  fetchUpdate,
  navigate,
} from "../dom/navigate";

function setup(bodyHtml: string) {
  const dom = new JSDOM(
    `<!doctype html><html><head><title>A</title></head><body>${bodyHtml}</body></html>`,
    { runScripts: "dangerously" },
  );
  const { document } = dom.window;
  return { dom, window: dom.window, document };
}

type MockInit = { headers: Record<string, string> };

/** A `Response`-shaped value with header `get` and a json body. */
function jsonResponse(body: unknown, headers: Record<string, string> = {}) {
  return { headers: new Map(Object.entries(headers)), json: async () => body };
}

/** Wrap a handler as a `fetch`, localizing the single unavoidable cast. */
function mockFetch(
  handler: (url: string, init: MockInit) => unknown,
): typeof fetch {
  return (async (url: string, init: MockInit) =>
    handler(url, init)) as unknown as typeof fetch;
}

describe("dom/navigate (SPA server-first update MVP)", () => {
  it("swaps the outlet from a server HTML update without reloading the document", () => {
    const { window, document } = setup(
      `<header id="shell">shell</header><main id="outlet"><p>Page A</p></main>`,
    );
    const outlet = document.getElementById("outlet")!;

    // Sentinels proving document/JS continuity (a real reload would wipe these).
    (window as any).__session = 0xc0ffee;
    let shellClicks = 0;
    document
      .getElementById("shell")!
      .addEventListener("click", () => shellClicks++);

    const applied = applyServerUpdate(
      { build: "build-1", title: "Page B", html: "<p>Page B</p>" },
      {
        build: "build-1",
        target: outlet,
        doc: document,
        onReload: () => assert.fail("should not have reloaded"),
      },
    );

    assert.equal(applied, true);
    assert.match(outlet.innerHTML, /Page B/);
    assert.doesNotMatch(outlet.innerHTML, /Page A/);
    assert.equal(document.title, "Page B");

    // Continuity: JS context survived and the shell's live listener still works.
    assert.equal((window as any).__session, 0xc0ffee);
    document
      .getElementById("shell")!
      .dispatchEvent(new window.Event("click", { bubbles: true }));
    assert.equal(shellClicks, 1);
  });

  it("falls back to a full reload on a build-hash mismatch (and does not touch the DOM)", () => {
    const { document } = setup(`<main id="outlet"><p>Page A</p></main>`);
    const outlet = document.getElementById("outlet")!;
    let reloadedTo: string | undefined = "untouched";

    const applied = applyServerUpdate(
      { build: "build-2", url: "/b", title: "Page B", html: "<p>Page B</p>" },
      {
        build: "build-1",
        target: outlet,
        doc: document,
        onReload: (u) => (reloadedTo = u),
      },
    );

    assert.equal(applied, false);
    assert.equal(reloadedTo, "/b");
    assert.match(outlet.innerHTML, /Page A/); // unchanged
    assert.equal(document.title, "A"); // unchanged
  });

  it("falls back when the server explicitly requests a reload", () => {
    const { document } = setup(`<main id="outlet"><p>A</p></main>`);
    const outlet = document.getElementById("outlet")!;
    let reloaded = false;
    const applied = applyServerUpdate(
      { build: "build-1", reload: true, html: "<p>B</p>" },
      {
        build: "build-1",
        target: outlet,
        doc: document,
        onReload: () => (reloaded = true),
      },
    );
    assert.equal(applied, false);
    assert.equal(reloaded, true);
    assert.match(outlet.innerHTML, /A/);
  });

  it("executes resume <script>s contained in injected HTML (the resume payload runs)", () => {
    const { window, document } = setup(`<main id="outlet"></main>`);
    const outlet = document.getElementById("outlet")!;
    (window as any).__resumed = 0;

    applyServerUpdate(
      {
        build: "build-1",
        html: `<p>hi</p><script>window.__resumed++</script>`,
      },
      { build: "build-1", target: outlet, doc: document, onReload() {} },
    );

    // innerHTML alone never runs scripts; the controller re-creates them so the
    // streamed resume payload actually executes after the swap.
    assert.equal((window as any).__resumed, 1);
  });

  it("does not run scripts when runScripts is false, but still calls the resume hook", () => {
    const { window, document } = setup(`<main id="outlet"></main>`);
    const outlet = document.getElementById("outlet")!;
    (window as any).__resumed = 0;
    let resumedTarget: Element | undefined;

    applyServerUpdate(
      { build: "build-1", html: `<script>window.__resumed++</script>` },
      {
        build: "build-1",
        target: outlet,
        doc: document,
        runScripts: false,
        resume: (t) => (resumedTarget = t),
        onReload() {},
      },
    );

    assert.equal((window as any).__resumed, 0);
    assert.equal(resumedTarget, outlet);
  });

  it("resolves a string selector target against the document", () => {
    const { document } = setup(`<main id="outlet"><p>A</p></main>`);
    const applied = applyServerUpdate(
      { build: "build-1", html: "<p>B</p>" },
      { build: "build-1", target: "#outlet", doc: document, onReload() {} },
    );
    assert.equal(applied, true);
    assert.match(document.getElementById("outlet")!.innerHTML, /B/);
  });

  it("executeScripts runs injected scripts in document order", () => {
    const { window, document } = setup(`<main id="outlet"></main>`);
    const outlet = document.getElementById("outlet")!;
    (window as any).__order = [];
    outlet.innerHTML = `<script>window.__order.push(1)</script><script>window.__order.push(2)</script>`;
    executeScripts(outlet, document);
    assert.deepEqual((window as any).__order, [1, 2]);
  });

  describe("navigate()", () => {
    it("fetches a server update, applies it in place, and records history", async () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      const sentHeaders: Record<string, string> = {};
      const pushed: string[] = [];

      const fetchImpl = mockFetch((url, init) => {
        Object.assign(sentHeaders, init.headers);
        return jsonResponse({
          build: "build-1",
          url,
          title: "B",
          html: "<p>From server B</p>",
        });
      });

      const ok = await navigate("/b", {
        build: "build-1",
        target: outlet,
        fetchImpl,
        host: {
          doc: document,
          history: { pushState: (_s, _t, u) => pushed.push(String(u)) },
          location: { assign: () => assert.fail("should not have reloaded") },
        },
      });

      assert.equal(ok, true);
      assert.match(outlet.innerHTML, /From server B/);
      assert.equal(document.title, "B");
      assert.deepEqual(pushed, ["/b"]);
      assert.equal(sentHeaders["x-marko-nav"], "1");
      assert.equal(sentHeaders["x-marko-build"], "build-1");
    });

    it("falls back to location.assign on a reload header", async () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      let assigned: string | undefined;

      const fetchImpl = mockFetch(() =>
        jsonResponse({ build: "build-1" }, { "x-marko-reload": "1" }),
      );

      const ok = await navigate("/b", {
        build: "build-1",
        target: outlet,
        fetchImpl,
        host: {
          doc: document,
          history: { pushState: () => assert.fail("should not push history") },
          location: { assign: (u) => (assigned = String(u)) },
        },
      });

      assert.equal(ok, false);
      assert.equal(assigned, "/b");
      assert.match(outlet.innerHTML, /A/);
    });

    it("falls back to location.assign when the fetch throws", async () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      let assigned: string | undefined;
      const fetchImpl = mockFetch(() => {
        throw new Error("network down");
      });

      const ok = await navigate("/b", {
        build: "build-1",
        target: outlet,
        fetchImpl,
        host: {
          doc: document,
          location: { assign: (u) => (assigned = String(u)) },
        },
      });

      assert.equal(ok, false);
      assert.equal(assigned, "/b");
    });

    it("falls back when the server build differs from the client build", async () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      let assigned: string | undefined;
      const fetchImpl = mockFetch((url) =>
        jsonResponse({ build: "build-2", url, html: "<p>B</p>" }),
      );

      const ok = await navigate("/b", {
        build: "build-1",
        target: outlet,
        fetchImpl,
        host: {
          doc: document,
          history: { pushState: () => assert.fail("should not push history") },
          location: { assign: (u) => (assigned = String(u)) },
        },
      });

      assert.equal(ok, false);
      assert.equal(assigned, "/b");
      assert.match(outlet.innerHTML, /A/);
    });
  });

  describe("fetchUpdate()", () => {
    it("sends nav headers and parses the JSON update", async () => {
      const sent: Record<string, string> = {};
      const fetchImpl = mockFetch((_url, init) => {
        Object.assign(sent, init.headers);
        return jsonResponse({ build: "build-1", html: "<p>B</p>" });
      });

      const update = await fetchUpdate("/b", { build: "build-1", fetchImpl });

      assert.deepEqual(update, { build: "build-1", html: "<p>B</p>" });
      assert.equal(sent["x-marko-nav"], "1");
      assert.equal(sent["x-marko-build"], "build-1");
    });

    it("normalizes a reload header into a reload update", async () => {
      const fetchImpl = mockFetch(() => ({
        headers: new Map([["x-marko-reload", "1"]]),
        json: async () => assert.fail("should not read body on reload"),
      }));

      const update = await fetchUpdate("/b", { build: "build-1", fetchImpl });
      assert.deepEqual(update, { build: "build-1", reload: true });
    });
  });

  describe("createNavigator()", () => {
    function countingFetch(body: () => Record<string, unknown>) {
      let calls = 0;
      const fetchImpl = mockFetch((url) => {
        calls++;
        return jsonResponse({ build: "build-1", url, ...body() });
      });
      return {
        fetchImpl,
        get calls() {
          return calls;
        },
      };
    }

    it("prefetch warms the cache so navigate does not refetch", async () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      const f = countingFetch(() => ({ html: "<p>B</p>" }));
      const pushed: string[] = [];

      const nav = createNavigator({
        build: "build-1",
        target: outlet,
        fetchImpl: f.fetchImpl,
        host: {
          history: { pushState: (_s, _t, u) => pushed.push(String(u)) },
          location: { assign: () => assert.fail("should not reload") },
        },
      });

      nav.prefetch("/b");
      await Promise.resolve(); // let the prefetch settle
      const ok = await nav.navigate("/b");

      assert.equal(ok, true);
      assert.equal(f.calls, 1); // fetched once (by prefetch), not again by navigate
      assert.match(outlet.innerHTML, /B/);
      assert.deepEqual(pushed, ["/b"]);
    });

    it("navigate falls back when a prefetch failed (and refetches/falls back)", async () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      let assigned: string | undefined;
      const fetchImpl = mockFetch(() => {
        throw new Error("offline");
      });

      const nav = createNavigator({
        build: "build-1",
        target: outlet,
        fetchImpl,
        host: { location: { assign: (u) => (assigned = String(u)) } },
      });

      nav.prefetch("/b"); // rejects in the background, handled
      await Promise.resolve();
      const ok = await nav.navigate("/b");

      assert.equal(ok, false);
      assert.equal(assigned, "/b");
      assert.match(outlet.innerHTML, /A/);
    });

    it("apply() applies an already-obtained (e.g. streamed) update and records history", () => {
      const { document } = setup(`<main id="outlet"><p>A</p></main>`);
      const outlet = document.getElementById("outlet")!;
      const pushed: string[] = [];
      const nav = createNavigator({
        build: "build-1",
        target: outlet,
        host: { history: { pushState: (_s, _t, u) => pushed.push(String(u)) } },
      });

      const ok = nav.apply({ build: "build-1", url: "/c", html: "<p>C</p>" });

      assert.equal(ok, true);
      assert.match(outlet.innerHTML, /C/);
      assert.deepEqual(pushed, ["/c"]);
    });
  });
});
