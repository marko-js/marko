import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A replayed response (a kept one applied again, as a back/forward cache
// does) ends with the token of its own time: the page keeps its newer one.
async function replay(document: Document) {
  const { patch } = document.defaultView as unknown as {
    patch: typeof import("@marko/runtime-tags/dom").patch;
  };
  const signal = new AbortController().signal;
  const token = () => patch({ renderId: "_" }, signal)[0]["x-marko-patch"];
  const before = token();
  await new Promise<void>((resolve, reject) =>
    patch({ renderId: "_" }, signal, 1)[1](
      new Response(";older\n", { headers: { "x-marko-patch": "1" } }),
      () => {},
      () => {},
      resolve,
      reject,
    ),
  );
  assert.notEqual(before, "b;");
  assert.equal(token(), before);
}

export const config: TestConfig = {
  patches: true,
  // The replay is the patched page's; a client render has no patch to replay.
  skip_csr: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    replay,
    { show: true, label: "c" },
  ],
};
