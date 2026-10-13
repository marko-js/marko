import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A patch started with an aborted signal is a caller's mistake, reported in
// debug builds rather than handled.
function abortedSignal(document: Document) {
  const { patch } = document.defaultView as unknown as {
    patch: typeof import("@marko/runtime-tags/dom").patch;
  };
  const controller = new AbortController();
  controller.abort();
  assert.throws(
    () => patch({ renderId: "_" }, controller.signal),
    /started with an aborted signal/,
  );
}

export const config: TestConfig = {
  patches: true,
  skip_csr: true,
  skip_optimize: true,
  steps: [{ label: "a" }, abortedSignal],
};
