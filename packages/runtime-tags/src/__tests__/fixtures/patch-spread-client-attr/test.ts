import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const mounted = (document: Document) => {
  assert.ok(
    document.querySelector("div")!.hasAttribute("data-mounted"),
    "resume",
  );
};
const kept = (document: Document) => {
  assert.ok(
    document.querySelector("div")!.hasAttribute("data-mounted"),
    "kept",
  );
};

// A patched spread keeps an attribute a script set.
export const config: TestConfig = {
  patches: true,
  csr_divergence:
    "A patched spread keeps attributes the client set, which a client render's spread removes.",
  steps: [{ attrs: { title: "a" } }, mounted, { attrs: { title: "a" } }, kept],
};
