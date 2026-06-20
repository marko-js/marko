import assert from "node:assert/strict";

import {
  type NavigationRenderable,
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
});
