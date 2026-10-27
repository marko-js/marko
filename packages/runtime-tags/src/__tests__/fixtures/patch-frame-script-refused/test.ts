import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A flush runs as a script carrying the document's nonce: one the page refuses
// (as its CSP refuses a script without that nonce) fails the patch, and the
// caller loads the document. Debug builds name the nonce the policy must allow.
async function refusedFlush(document: Document) {
  const { patch } = document.defaultView as unknown as {
    patch: typeof import("@marko/runtime-tags/dom/patch").patch;
  };
  const [, apply] = patch(
    { renderId: "_", cspNonce: "doc" },
    new AbortController().signal,
  );
  const { head } = document;
  const append = head.appendChild;
  head.appendChild = <T extends Node>(node: T) => node;
  const calls: string[] = [];
  try {
    await new Promise<void>((resolve) =>
      apply(
        new Response("{}\n", { headers: { "x-marko-patch": "b" } }),
        () => {
          calls.push("commit");
        },
        () => calls.push("applied"),
        () => resolve(void calls.push("end")),
        () => resolve(void calls.push("fail")),
      ),
    );
  } finally {
    head.appendChild = append;
  }
  assert.deepEqual(calls, ["commit", "fail"]);
}

export const config: TestConfig = {
  patches: true,
  // The patched page's own flushes; a client render has none.
  skip_csr: true,
  // Debug builds warn why the patch rejected.
  skip_parity: true,
  steps: [{ label: "a" }, { label: "b" }, refusedFlush, { label: "c" }],
};
