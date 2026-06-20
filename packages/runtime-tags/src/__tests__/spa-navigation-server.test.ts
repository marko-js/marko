import assert from "node:assert/strict";

import {
  isNavigationRequest,
  readHeader,
  requestBuild,
  type ServerUpdate,
  updateFromResponse,
} from "../common/spa";
import {
  handleNavigation,
  type NavigationRenderable,
  navigationResponse,
  reloadDirective,
  renderNavigationUpdate,
} from "../html/navigation";

function asyncChunks(chunks: string[]): AsyncIterable<string> {
  return {
    async *[Symbol.asyncIterator]() {
      for (const c of chunks) yield c;
    },
  };
}

/** A fake Marko render that streams the given chunks. */
function fakeTemplate(chunks: string[]): NavigationRenderable {
  return { render: () => asyncChunks(chunks) };
}

describe("html/navigation (SPA server helper)", () => {
  it("collects a streamed render into a ServerUpdate", async () => {
    const update = await renderNavigationUpdate(
      fakeTemplate(["<main>", "<p>hello</p>", "</main>"]),
      { id: 1 },
      {
        build: "build-7",
        url: "/p/1",
        title: "Hello",
        readyId: "tpl_detail",
        runtimeId: "M",
      },
    );

    assert.deepEqual(update, {
      build: "build-7",
      url: "/p/1",
      title: "Hello",
      readyId: "tpl_detail",
      runtimeId: "M",
      html: "<main><p>hello</p></main>",
    });
  });

  it("passes input through to the render", async () => {
    let seen: unknown;
    const template: NavigationRenderable = {
      render(input) {
        seen = input;
        return asyncChunks([]);
      },
    };

    await renderNavigationUpdate(template, { q: "abc" }, { build: "b" });
    assert.deepEqual(seen, { q: "abc" });
  });

  it("omits readyId/runtimeId for a static fragment", async () => {
    const update = await renderNavigationUpdate(
      fakeTemplate(["<p>static</p>"]),
      undefined,
      { build: "b1" },
    );
    assert.equal(update.readyId, undefined);
    assert.equal(update.runtimeId, undefined);
    assert.equal(update.html, "<p>static</p>");
  });

  it("reloadDirective marks a full-reload fallback", () => {
    assert.deepEqual(reloadDirective("/somewhere"), {
      build: "",
      url: "/somewhere",
      reload: true,
    });
  });

  describe("request header helpers", () => {
    it("reads headers from a web Headers / Map", () => {
      const h = new Map([
        ["x-marko-nav", "1"],
        ["x-marko-build", "build-9"],
      ]);
      assert.equal(isNavigationRequest(h), true);
      assert.equal(requestBuild(h), "build-9");
      assert.equal(readHeader(h, "missing"), undefined);
    });

    it("reads headers from a plain record (Node-style, incl. arrays)", () => {
      const h = { "x-marko-nav": "1", "x-marko-build": ["build-9", "dup"] };
      assert.equal(isNavigationRequest(h), true);
      assert.equal(requestBuild(h), "build-9");
    });

    it("treats a request without the nav header as a full document", () => {
      assert.equal(isNavigationRequest({}), false);
      assert.equal(isNavigationRequest(new Map()), false);
    });
  });

  describe("navigationResponse() wire round-trip", () => {
    /** Re-read a serialized response the way the client's fetch path would. */
    function roundTrip(
      update: ServerUpdate,
      clientBuild: string,
    ): ServerUpdate {
      const { headers, body } = navigationResponse(update);
      return updateFromResponse(
        new Map(Object.entries(headers)),
        body,
        clientBuild,
      );
    }

    it("carries HTML in the body and metadata in headers", () => {
      const { headers, body } = navigationResponse({
        build: "b1",
        url: "/p/1",
        title: "Detail",
        readyId: "tpl_detail",
        runtimeId: "M",
        html: "<main><p>hi</p></main>",
      });

      assert.equal(body, "<main><p>hi</p></main>");
      assert.equal(headers["x-marko-url"], encodeURIComponent("/p/1"));
      assert.equal(headers["x-marko-title"], encodeURIComponent("Detail"));
      assert.equal(headers["x-marko-ready"], "tpl_detail");
      assert.equal(headers["x-marko-runtime"], "M");
      // The build is intentionally not echoed on success.
      assert.equal(headers["x-marko-build"], undefined);
    });

    it("round-trips an update back to the client (build taken from the client)", () => {
      const back = roundTrip(
        {
          build: "b1",
          url: "/p/1",
          title: "Detail",
          readyId: "tpl_detail",
          runtimeId: "M",
          html: "<main><p>hi</p></main>",
        },
        "b1",
      );
      assert.deepEqual(back, {
        build: "b1",
        url: "/p/1",
        title: "Detail",
        readyId: "tpl_detail",
        runtimeId: "M",
        html: "<main><p>hi</p></main>",
      });
    });

    it("preserves a title that needs percent-encoding", () => {
      const back = roundTrip(
        { build: "b1", title: "Q&A — 50% off", html: "<p>x</p>" },
        "b1",
      );
      assert.equal(back.title, "Q&A — 50% off");
    });

    it("serializes a reload directive (no HTML body)", () => {
      const { headers, body } = navigationResponse(
        reloadDirective("/somewhere"),
      );
      assert.equal(headers["x-marko-reload"], "1");
      assert.equal(headers["x-marko-url"], encodeURIComponent("/somewhere"));
      assert.equal(body, "");

      const back = updateFromResponse(
        new Map(Object.entries(headers)),
        body,
        "b1",
      );
      assert.equal(back.reload, true);
      assert.equal(back.url, "/somewhere");
      assert.equal(back.html, undefined);
    });
  });

  describe("handleNavigation()", () => {
    const tpl = fakeTemplate(["<p>content</p>"]);

    it("returns kind:full for a non-navigation request", async () => {
      const res = await handleNavigation(
        tpl,
        {},
        {
          headers: {},
          build: "b1",
        },
      );
      assert.deepEqual(res, { kind: "full" });
    });

    it("returns kind:reload for a navigation request from a stale build", async () => {
      const res = await handleNavigation(
        tpl,
        {},
        {
          headers: { "x-marko-nav": "1", "x-marko-build": "old" },
          build: "b1",
          url: "/p",
        },
      );
      assert.equal(res.kind, "reload");
      assert.deepEqual(res.update, { build: "", url: "/p", reload: true });
    });

    it("returns kind:update with the rendered fragment on a matching build", async () => {
      const res = await handleNavigation(
        tpl,
        { id: 1 },
        {
          headers: new Map([
            ["x-marko-nav", "1"],
            ["x-marko-build", "b1"],
          ]),
          build: "b1",
          url: "/p",
          readyId: "tpl",
        },
      );
      assert.equal(res.kind, "update");
      assert.equal(res.update.html, "<p>content</p>");
      assert.equal(res.update.readyId, "tpl");
      assert.equal(res.update.build, "b1");
    });
  });
});
