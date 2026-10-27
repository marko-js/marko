import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

function bodyErrors(document: Document) {
  return expectCut(
    document,
    new ReadableStream({
      start: (controller) =>
        controller.enqueue(new TextEncoder().encode("{}\n")),
      pull: (controller) => controller.error(new Error("cut")),
    }),
  );
}

function bodyEndsInFlush(document: Document) {
  return expectCut(document, "{}\n{}");
}

// A response cut after its first flush (its body errors, or ends inside the
// next flush) fails the patch, applying nothing past that flush.
async function expectCut(document: Document, body: BodyInit) {
  const { patch } = document.defaultView as unknown as {
    patch: typeof import("@marko/runtime-tags/dom/patch").patch;
  };
  const [, apply] = patch({ renderId: "_" }, new AbortController().signal);
  const calls: string[] = [];
  await new Promise<void>((resolve) =>
    apply(
      new Response(body, { headers: { "x-marko-patch": "b" } }),
      () => {
        calls.push("commit");
      },
      () => calls.push("applied"),
      () => resolve(void calls.push("end")),
      () => resolve(void calls.push("fail")),
    ),
  );
  assert.deepEqual(calls, ["commit", "applied", "fail"]);
}

export const config: TestConfig = {
  patches: true,
  // The patched page's own responses; a client render has none.
  skip_csr: true,
  // Debug builds warn why the patch rejected.
  skip_parity: true,
  steps: [{ label: "a" }, bodyErrors, bodyEndsInFlush, { label: "b" }],
};
